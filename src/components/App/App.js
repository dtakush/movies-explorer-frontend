import React from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

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
  let location = useLocation();
  const currentPath = location.pathname;

  //Вход
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [jwt, setJwt] = React.useState('');

  //Карточки
  const [movies, setMovies] = React.useState([]);
  const [sortedMovies, setSortedMovies] = React.useState([]);
  const [isButtonHide, setIsButtonHide] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [shortMovie, setShortMovie] = React.useState(false);
  const [isNoSearchResult, setIsNoSearchResult] = React.useState(false);


/////////////////////////////////////
//////////// АККАУНТ ////////////////
/////////////////////////////////////


  //Регистрация пользователя
  function handleRegister(name, email, password) {
    auth.register(name, email, password)
      .then(() => {
        handleLogin(email, password);
      })
      .catch((err) => {
        console.log(`При регистрации: ${err}`);
      })
  }

  //Авторизация пользователя
  function handleLogin(email, password) {
    auth.authorize(email, password)
    .then((res) => {
      if(res && res.jwt) {
        setJwt(res.jwt);
        localStorage.setItem('jwt', res.jwt);
        tokenCheck();
      }
    })
    .then(() => {
      setLoggedIn(true);
      history.push('/movies');
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

            } else {
              localStorage.removeItem('jwt');
              history.push("/");
              setLoggedIn(false);
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
  function handleUpdateUserInfo(name, email) {
    const jwt = localStorage.getItem('jwt');
    mainApi.setUserInfo(name, email, jwt)
      .then((userData) => {
        setCurrentUser({...currentUser, ...userData});
        console.log('Успешно!');
      })
      .catch((err) => {
        console.log(`Attention! ${err}`);
    })
  }

  //Выход из аккаунта
  function handleSignOut() {
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    localStorage.removeItem('movies');
    localStorage.removeItem('savedMovies');
    localStorage.removeItem('movieSearchResult');
    localStorage.removeItem('savedMovieSearchResult');
    localStorage.clear();
    history.push('/');
  }


/////////////////////////////////////
/////////// ФИЛЬМЫ //////////////////
/////////////////////////////////////

  //Сохранение фильма
  function saveCard(movie) {
    const jwt = localStorage.getItem('jwt');
    mainApi.saveMovie(movie, jwt)
      .then((card) => {
        setSavedMovies([card, ...savedMovies]);
        localStorage.setItem('savedMovies', JSON.stringify([card, ...savedMovies]));
      })
      .catch((err) => {
        console.log(`Attention! ${err}`);
      });
  }

  //Удаление из сохраненных
  function deleteCard(card) {
    const jwt = localStorage.getItem('jwt');
    const movieId = card.id || card.movieId;
    const deletedMovie = savedMovies.filter((i) => i.movieId === movieId);
    mainApi.deleteCard(deletedMovie[0], jwt)
      .then((movie) => {
        const newSavedMovies = savedMovies.filter((e) => e.movieId !== movieId);
        setSavedMovies(newSavedMovies);   
        localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies));
      })
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
          setIsButtonHide(true);
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

  //изменение состояние чекбокса
  function handleCheckBox() {
    setShortMovie(!shortMovie);
  }

  //фильтрация по продолжительности
  function filterShortMovies(sortedMovies) {
      if (sortedMovies.length !== 0 || sortedMovies !== 'undefined') {
          return sortedMovies.filter((movie) =>
              shortMovie ? movie.duration <= 40 : true
          )
      }
  }

/////////////////////////////////////
/////////// ЗАПРОСЫ //////////////////
/////////////////////////////////////
  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      tokenCheck();
      setLoggedIn(true);
      history.push(currentPath);
    }
    //eslint-disable-next-line
  }, []);

  //Запрос информации пользователя
  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if(loggedIn) {
      mainApi.getUserInfo(jwt)
        .then((userInfo) => {
          setCurrentUser(userInfo);
        })
        .catch((err) => {
          console.log(`Attention! ${err}`);
        });
      }
      
  }, [loggedIn]);

  //Запрос всех фильмов
  React.useEffect(() => {
      moviesApi.getInitialCards()
      .then((movies) => {
        localStorage.setItem('movies', movies);
        setMovies(movies);
      })
      .catch((err) => {
        console.log(`Attention! ${err}`);
      });
  }, []);
  
  //Запрос сохраненных фильмов
  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if(loggedIn) {
      mainApi.getSavedMovies(jwt)
      .then((allSavedMovies) => {
        //console.log(allSavedMovies);
        const localSavedMovies = allSavedMovies.filter((item) => item.owner === currentUser._id);
        localStorage.setItem('savedMovies', JSON.stringify(localSavedMovies));
        setSavedMovies(localSavedMovies);
        //console.log(localSavedMovies);

        /* const localSavedMovies = JSON.parse(localStorage.getItem('savedMovies'));
        if (localSavedMovies) {
          localSavedMovies.filter((item) => item.owner === currentUser._id);
          setSavedMovies(localSavedMovies);
        } */
      })
      .catch((err) => {
        console.log(`Attention! ${err}`);
      });
    }
  }, [loggedIn]);
  


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">

        <Switch>
          <Route exact path="/">
            <Main
            loggedIn={loggedIn} />
          </Route>

          <ProtectedRoute exact path="/movies"
              component={Movies}
              loggedIn={loggedIn}
              cards={filterShortMovies(sortedMovies)}
              shortMovie={shortMovie}
              isLoading={isLoading}
              onSearch={searchMovies}
              hideButton={isButtonHide}
              onSave={saveCard}
              onDelete={deleteCard}
              savedMovies={savedMovies}
              onCheck={handleCheckBox}
              noResult={isNoSearchResult}
          />
    
          <ProtectedRoute exact path="/saved-movies"
              component={SavedMovies}
              loggedIn={loggedIn}
              cards={filterShortMovies(savedMovies)}
              shortMovie={shortMovie}
              isLoading={isLoading}
              hideButton={isButtonHide}
              onSearch={searchSavedMovies}
              onDelete={deleteCard}
              onCheck={handleCheckBox}
              noResult={isNoSearchResult}
          />
          
          <ProtectedRoute exact path="/profile"
              component={Profile}
              loggedIn={loggedIn}
              onUpdateUser={handleUpdateUserInfo}
              onSignOut={handleSignOut}
          />

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
