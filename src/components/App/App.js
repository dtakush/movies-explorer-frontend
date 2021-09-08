import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

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
  const isMoviesSaved = true;

  //Регистрация пользователя
  function handleRegister(name, email, password) {
    mainApi.register(name, email, password)
    .then((res) => {
      console.log(res);
        if(res) {
          history.push("/signin");
        }
    })
    .catch((err) => {
        console.log(`Attention! ${err}`);
    })
  }

  //Авторизация пользователя
  function handleLogin(email, password) {
    mainApi.authorize(email, password)
    .then((res) => {
        if(res) {
          localStorage.setItem('token', res.token);
          tokenCheck()
          setLoggedIn(true);
          history.push('/movies');
        }
    })
    .catch((err) => {
        console.log(`Attention! ${err}`);
    })
  }

  //Проверка токена
function tokenCheck() {
    const token = localStorage.getItem('token');

    if(token) {
      mainApi.checkToken(token)
        .then((res) => {
            if(res) {
              setUserData({ 
                  email: res.email,
                  id: res._id,
              });
                
              setLoggedIn(true);
              history.push("/movies");
            } else {
              localStorage.removeItem("token");
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

  /* 

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
    
  }, [loggedIn]); */

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
  function handleSaveMovie(movie) {
    console.log(movie);
    mainApi.saveMovie(movie)
      .then((res) => {
        console.log(res);
        setSavedMovies([movie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(`Attention! ${err}`);
      })   
  }

  //Удаление фильмов
  function handleDeleteMovie(movie) {
    mainApi.deleteMovie(movie.id)
      .then(() => {
        const SavedMoviesList = savedMovies.filter((m) => m._id !== movie._id);
        const SavedFilteredMoviesList = savedMovies.filter(
          (m) => m._id !== movie._id
        );
        setSavedMovies(SavedMoviesList);
        //setSavedFilteredMovies(SavedFilteredMoviesList);
      })
      .catch((err) => {
        console.log(`Attention! ${err}`);
      })
  }


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
            onSearch={searchMovies}
            hideButton={isButtonHide}
            noResult={isNoSearchResult}
            onSaveClick={handleSaveMovie}
            onDelete={handleDeleteMovie}
            savedMovies={savedMovies}
            isMoviesSaved={isMoviesSaved}
            />
          </Route>

          <Route path="/saved-movies">
            <SavedMovies
            loggedIn={loggedIn}
            onSearch={searchSavedMovies}
            cards={savedMovies}
            hideButton={isButtonHide}
            noResult={isNoSearchResult}
             />
          </Route>

          <Route path="/profile">
            <Profile
            loggedIn={loggedIn}
            currentUser={currentUser}
             />
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
