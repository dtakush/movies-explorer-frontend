import React from 'react';
import { Route, Switch } from 'react-router-dom';

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
import { logValidationWarning } from 'jest-validate';

function App() {

  //Карточки
  const [movies, setMovies] = React.useState([]);
  const [sortedMovies, setSortedMovies] = React.useState([]);
  const [isButtonHide, setIsButtonHide] = React.useState(false);
  const [isNoSearchResult, setIsNoSearchResult] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);

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
        if ((item.nameRU !== null && item.nameRU.toLowerCase().includes(keyword))
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
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/movies">
          <Movies
          cards={sortedMovies}
          onSearch={searchMovies}
          hideButton={isButtonHide}
          noResult={isNoSearchResult}
          onSave={saveMovies}
          isMovieSaved={isMovieSaved}
          onDelete={deleteMovie}
          setMovieSavedIcon={setMovieSavedIcon}
          />
        </Route>

        <Route path="/saved-movies">
          <SavedMovies
          onSearch={searchSavedMovies}
          cards={savedMovies}
          hideButton={isButtonHide}
          oResult={isNoSearchResult} />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/signin">
          <Login />
        </Route>
        
        <Route path="/signup">
          <Register />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
    
  );
}

export default App;
