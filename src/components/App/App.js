import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

// Компоненты
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

//Контекст
import { CurrentUserContext } from '../../context/CurrentUserContext';

//API
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import * as auth from '../../utils/auth';

function App() {
  const history = useHistory();

  //Переменные состояния
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userData, setUserData] = React.useState({});

  //Карточки
  const [movies, setMovies] = React.useState([]);
  const [sortedMovies, setSortedMovies] = React.useState([]);
  const [isButtonHide, setIsButtonHide] = React.useState(false);
  const [isNoSearchResult, setIsNoSearchResult] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);

  //Регистрация пользователя
  function handleRegister({email, password}) {
    auth.register(email, password)
    .then((res) => {
        if(res) {
          history.push("/signin");
        }
    })
    .catch((err) => {
        console.log(`Attention! ${err}`);
    })
  }

  //Авторизация пользователя
  function handleLogin({email, password}) {
    auth.authorize(email, password)
    .then((res) => {
        if(res.token) {
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
                setUserData({ 
                    email: res.email,
                    id: res._id,
                });
                
                setLoggedIn(true);
                history.push("/");
            } else {
                localStorage.removeItem("jwt");
                return
            }
        })
        .catch((err) => {
            console.log(`Attention! ${err}`);
            history.push("/signin");
        })
    }
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

  //Выход из аккаунта
  /* function handleSignOut() {
    setLoggedIn(false);
    history.push("/signin");
    localStorage.removeItem("jwt");
  } */

  //Запрос карточек
  React.useEffect(() => {
    moviesApi.getInitialCards()
      .then((movies) => {     
        setMovies(movies);
      })
      .catch((err) => {
        console.log(`Attention! ${err}`);
      });
    /* if(loggedIn) {
      moviesApi.getInitialCards()
      .then((cards) => {     
        setCards(cards);
      })
      .catch((err) => {
        console.log(`Attention! ${err}`);
      });
    }*/
  }, []);

  //Поиск фильмов
  function searchMovies(word) {
    //showPreloader();
    const keyword = word.toLowerCase();
    const result = [];
    movies.forEach((item) => {
      if((item.nameRU !== null && item.nameRU.toLowerCase().includes(keyword))
        ||
        (item.nameEN !== null && item.nameEN.toLowerCase().includes(keyword))) {
          result.push(item);
          setIsNoSearchResult(false);
          setIsButtonHide(false)
          setSortedMovies(result);
          localStorage.setItem('movieSearchResult', JSON.stringify(result));
          //console.log(localStorage);
        } else if (result.length < 1) {
          setIsNoSearchResult(true);
          setIsButtonHide(true);
          setSortedMovies([]);
        }
    })
  }

  //Поиск сохраненных фильмов
  function searchSavedMovies(word) {
    //showPreloader();
    const keyword = word.toLowerCase();
    const result = [];
    savedMovies.forEach((item) => {
      if ((item.nameRU !== null && item.nameRU.toLowerCase().includes(keyword))
          ||
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

  //Сохранение фильмов
  const isMovieSaved = (movie) => savedMovies.some((item) => item.id === movie.id);

  function setMovieSavedIcon(movie) {
    return (movie.isSaved = savedMovies.some(
        (savedMovie) => savedMovie.movieId === movie.id
    ));
  }

  function saveMovies(movie) {
    mainApi.saveMovie(movie)
      .then((savedMovie) => {
        localStorage.setItem('savedMovie', JSON.stringify((savedMovie = [savedMovie, ...savedMovies])));
        setSavedMovies(savedMovie);
      })
      .catch((err) => {
        console.log(`Attention! ${err}`);
      })
  }

  //Удаление фильмов
  function deleteMovie(movie) {
    const movieId = movie.movieId;
    const selectedMovie = savedMovies.find((item) => item.movieId === movieId);

    mainApi.deleteMovie({_id: selectedMovie._id})
        .then((deletedMovie) => {
            if (!deletedMovie) {
                throw new Error('При удалении фильма произошла ошибка');
            } else {
                const newMoviesList = savedMovies.filter((c) => c.movieId !== movieId);
                setSavedMovies(newMoviesList);
            }
        })
        .catch((err) => {
            console.log(`При удалении фильма: ${err}`)
        });
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <ProtectedRoute exact path="/">
            <Main />
          </ProtectedRoute>

          <ProtectedRoute path="/movies">
            <Movies
            loggedIn={loggedIn}
            cards={sortedMovies}
            onSearch={searchMovies}
            hideButton={isButtonHide}
            noResult={isNoSearchResult}
            onSave={saveMovies}
            isMovieSaved={isMovieSaved}
            onDelete={deleteMovie}
            setMovieSavedIcon={setMovieSavedIcon}
            />
          </ProtectedRoute>

          <ProtectedRoute path="/saved-movies">
            <SavedMovies
            loggedIn={loggedIn}
            onSearch={searchSavedMovies}
            cards={savedMovies}
            hideButton={isButtonHide}
            oResult={isNoSearchResult}
            onDelete={deleteMovie} />
          </ProtectedRoute>

          <ProtectedRoute path="/profile">
            <Profile
            loggedIn={loggedIn}
            currentUser={currentUser}
             />
          </ProtectedRoute>

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
