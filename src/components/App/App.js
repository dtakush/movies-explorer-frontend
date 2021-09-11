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

//API
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';


function App() {
  const history = useHistory();

  //Вход
  const [loggedIn, setLoggedIn] = React.useState(false);

  //Карточки
  const [movies, setMovies] = React.useState([]);

  //Регистрация пользователя
  function handleRegister({name, email, password}) {
    console.log(name, email, password);
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
  function handleLogin({email, password}) {
    mainApi.authorize(email, password)
    .then((res) => {
        if(res) {
          localStorage.setItem('jwt', res.token);
          tokenCheck();
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
    const jwt = localStorage.getItem('jwt');

    if(jwt) {
      mainApi.checkToken(jwt)
        .then((res) => {
            if(res) {
              setLoggedIn(true);
              history.push("/movies");
            } else {
              setLoggedIn(false);
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
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/movies">
          <Movies
          cards={movies} />
        </Route>

        <Route path="/saved-movies">
          <SavedMovies />
        </Route>

        <Route path="/profile">
          <Profile />
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
    
  );
}

export default App;
