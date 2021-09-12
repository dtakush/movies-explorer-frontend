import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

//Контекст
import { CurrentUserContext } from '../../context/CurrentUserContext';

// Компоненты
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

//API
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import * as auth from "../../utils/auth";


function App() {
  const history = useHistory();

  //Вход
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  //Карточки
  const [movies, setMovies] = React.useState([]);
  const [sortedMovies, setSortedMovies] = React.useState([]);
  const [isButtonHide, setIsButtonHide] = React.useState(false);
  const [isNoSearchResult, setIsNoSearchResult] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);



/////////////////////////////////////
//////////// АККАУНТ ////////////////
/////////////////////////////////////

  //Регистрация пользователя
  function handleRegister({name, email, password}) {
    auth.register(name, email, password)
      .then((data) => {
        if (data) {
          history.push('/signin');
        }
      })
      .catch((err) => {
        console.log(`При регистрации: ${err}`);
      })
  }

  //Авторизация пользователя
  function handleLogin({email, password}) {
    auth.authorize(email, password)
    .then((res) => {
      if(res && res.token) {
        tokenCheck();
        history.push('/movies');
      }
    })
    .catch((err) => {
        console.log(`Attention! ${err}`);
    })
  }

  //Проверка токена
  function tokenCheck() {
    const jwt = localStorage.getItem('jwt');

    if(jwt) {
      auth.checkToken(jwt)
        .then((res) => {
            if(res) {
              setLoggedIn(true);
              setCurrentUser(res);
            } else {
              setLoggedIn(false);
              // localStorage.removeItem('jwt');
              history.push("/");
              return
            }
        })
        .catch((err) => {
            console.log(`Attention! ${err}`);
            history.push("/signin");
        })
    }
  }

  //Обновление данных профиля
  function handleUpdateUserInfo(userInfo) {
    mainApi.setUserInfo(userInfo)
      .then((userData) => {
        setCurrentUser({...currentUser, ...userData});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //Выход из аккаунта
  function handleSignOut() {
    setLoggedIn(false);
    history.push('/');
    localStorage.removeItem('jwt');
    localStorage.removeItem('movieSearchResult');
    localStorage.removeItem('savedMovieSearchResult');
  }

  React.useEffect(() => {
    tokenCheck();
    // eslint-disable-next-line
  }, []);

  //Запрос информации пользователя
  React.useEffect(() => {
    if(loggedIn) {
        mainApi.getUserInfo()
        .then((userInfo) => {
            setCurrentUser(userInfo);
        })
        .catch((err) => {
            console.log(`Attention! ${err}`);
        });
    }
    
  }, [loggedIn]);

/////////////////////////////////////
/////////// ФИЛЬМЫ //////////////////
/////////////////////////////////////

  const isSaved = (movie) => savedMovies.some(i => i.id === movie.id);

  //Сохранение фильма
  function saveCard(card) {
    console.log(card);
    mainApi.saveMovie(card)
      .then((movie) => {
        console.log(movie);
        setSavedMovies([...savedMovies, movie])
      })
      .catch((err) => {
        console.log(`Attention! ${err}`);
      });
  }

  //Удаление из сохраненных
  function deleteCard(card) {
    console.log(card);
    mainApi.deleteMovie(card.id)
      .then((movie) => {
        const savedMoviesList = savedMovies.filter((m) => m._id !== movie._id);
        setSavedMovies(savedMoviesList);
      })
      .catch((err) => {
        console.log(`Attention! ${err}`);
      });
  }

  //Поиск фильмов
  function searchMovies(word) {
    showPreloader();
    const keyword = word.toLowerCase();
    const result = [];
    movies.forEach((item) => {
      if((item.nameRU !== null && item.nameRU.toLowerCase().includes(keyword))||
          (item.nameEN !== null && item.nameEN.toLowerCase().includes(keyword))) {
          result.push(item);
          setIsNoSearchResult(false);
          setIsButtonHide(false)
          setSortedMovies(result);
          localStorage.setItem('movieSearchResult', JSON.stringify(result));
        } else if (result.length < 1) {
          setIsNoSearchResult(true);
          setIsButtonHide(true);
          setSortedMovies([]);
        }
    })
  }

  //Поиск сохраненных фильмов
  function searchSavedMovies(word) {
    showPreloader();
    const keyword = word.toLowerCase();
    const result = [];
    savedMovies.forEach((item) => {
      if ((item.nameRU !== null && item.nameRU.toLowerCase().includes(keyword)) ||
          (item.nameEN !== null && item.nameEN.toLowerCase().includes(keyword))) {
            result.push(item);
            setIsNoSearchResult(false);
            setIsButtonHide(false)
            setSavedMovies(result);
            localStorage.setItem('savedMovieSearchResult', JSON.stringify(result));
            //console.log(localStorage);
      } else if (result.length < 1) {
            setIsNoSearchResult(true);
            setIsButtonHide(true);
            setSavedMovies([]);
      }
    })
  }

  //Прелоадер
  function showPreloader() {
    setIsLoading(true);
    setTimeout(async () => {
        setIsLoading(false);
    }, 1000);
  }

  React.useEffect(() => {
    moviesApi.getInitialCards()
      .then((movies) => {   
        setMovies(movies);
      })
      .catch((err) => {
        console.log(`Attention! ${err}`);
      });
  }, []);



  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/movies">
            <Movies
            loggedIn={loggedIn}
            cards={sortedMovies}
            isLoading={isLoading}
            onSearch={searchMovies}
            hideButton={isButtonHide}
            noResult={isNoSearchResult}
            onSave={saveCard}
            onDelete={deleteCard}
            isSaved={isSaved} />
          </Route>

          <Route path="/saved-movies">
            <SavedMovies
            loggedIn={loggedIn}
            cards={savedMovies}
            onSearch={searchSavedMovies}
            onDelete={deleteCard}
            isSaved={isSaved} />
          </Route>

          <Route path="/profile">
            <Profile
            loggedIn={loggedIn}
            onUpdateUser={handleUpdateUserInfo}
            onSignOut={handleSignOut} />
          </Route>

          <Route path="/signin">
            <Login
            onLogin={handleLogin} />
          </Route>
          
          <Route path="/signup">
            <Register
            onRegister={handleRegister} />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
    
  );
}

export default App;
