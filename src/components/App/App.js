import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
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

  //Вход
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  //Карточки
  const [movies, setMovies] = React.useState([]);
  const [sortedMovies, setSortedMovies] = React.useState([]);
  const [isButtonHide, setIsButtonHide] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [shortMovie, setShortMovie] = React.useState(false);
  const [isNoSearchResult, setIsNoSearchResult] = React.useState(false);

  //onsole.log(localStorage);
/////////////////////////////////////
//////////// АККАУНТ ////////////////
/////////////////////////////////////

  //Регистрация пользователя
  function handleRegister(name, email, password) {
    auth.register(name, email, password)
      .then((res) => {
        console.log(res);
        
        auth.authorize(res.email, res.password)
          .then((res) => {
            if(res && res.token) {
              localStorage.setItem('jwt', res.token);
              history.push('/movies');
              setLoggedIn(true);
              tokenCheck();
            } else {
              setLoggedIn(false);
            }
      })
      .catch((err) => {
        console.log(`При регистрации: ${err}`);
      })
  })}

  //Авторизация пользователя
  function handleLogin(email, password) {
    auth.authorize(email, password)
    .then((res) => {
      if(res && res.token) {
        localStorage.setItem('jwt', res.token);
        history.push('/movies');
        setLoggedIn(true);
        tokenCheck();
      } else {
        setLoggedIn(false);
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
              setCurrentUser(res);
            } else {
              localStorage.removeItem('jwt');
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
        console.log('Успешно!');
      })
      .catch((err) => {
        console.log(`Attention! ${err}`);
    })
  }

  //Выход из аккаунта
  function handleSignOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('savedMovies');
    localStorage.removeItem('movieSearchResult');
    localStorage.removeItem('savedMovieSearchResult');
    setLoggedIn(false);
    history.push('/');
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

  //Сохранение фильма
  function saveCard(movie) {
    mainApi.saveMovie(movie)
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
    const movieId = card.id || card.movieId;
    const deletedMovie = savedMovies.filter((i) => i.movieId === movieId);
    mainApi.deleteCard(deletedMovie[0])
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

  React.useEffect(() => {
    if(loggedIn) {
      moviesApi.getInitialCards()
      .then((movies) => {   
        setMovies(movies);
      })
      .catch((err) => {
        console.log(`Attention! ${err}`);
      });
    }
  }, [loggedIn]);


  React.useEffect(() => {
    if(loggedIn) {
      mainApi.getSavedMovies()
        .then(() => {
          const localSavedMovies = JSON.parse(localStorage.getItem('savedMovies'));
          if (localSavedMovies) {
            localSavedMovies.filter((item) => item.owner === currentUser._id);
            setSavedMovies(localSavedMovies);
          }
        })
      }  
    }, [loggedIn, currentUser._id]);


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main />
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
