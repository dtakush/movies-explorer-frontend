import React from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {
    let location = useLocation();
    
    //Изменение формата продолжительности
    function durationToString(dur) {
        const hours = Math.trunc(dur/60);
        const minutes = dur%60;
        return `${hours > 0 ? `${hours}ч ` : ''}${minutes}м`;
    }

    //Сохранение фильма
    const [isSaved, setIsSaved] = React.useState(false);

    //const isSaved = props.isSavedMovie(props.movie);

    //const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    console.log(props.movie);
    //const currentMovie = savedMovies.find((movie) => movie.nameRU === props.movie.nameRU);

    //сохранить фильм
    function handleSaveClick(evt) {
        evt.preventDefault();
        props.onSaveClick(props.movie, !isSaved);
        setIsSaved(!isSaved);
      }
    
      function handleDeleteClick() {
        props.onSaveClick(props.movie, false);
      }

    /* function handleSave() {
        props.onSave({
            country: props.movie.country,
            description: props.movie.description,
            director: props.movie.director,
            duration: props.movie.duration,
            movieId: props.movie.id,
            image: `https://api.nomoreparties.co${props.movie.image.url}`,
            nameEN: props.movie.nameEN,
            nameRU: props.movie.nameRU,
            trailerLink: props.movie.trailerLink,
            year: props.movie.year,
        });
        //console.log(movie);
        setIsSaved(true);
    }

    //удалить из сохраненного
    function handleRemoveSave() {
        setIsSaved(false);
        //console.log(currentMovie);
        //props.onDeleteMovie(currentMovie._id);
    }

    //удалить сохраненный
    function handleDeleteMovie() {
        props.onSaveClick(movie, false);
    } */

    return (
        <div className="card">
            <div className="card__menu">
                <div className="card__text">
                    <h5 className="card__title">{props.nameRU}</h5>
                    <p className="card__duraton">{durationToString(props.duration)}</p>
                </div>

                {location.pathname === '/movies' && !isSaved && (
                    <button className='card__save-button' onClick={handleSaveClick}>
                        <div className='card__save-icon'></div>
                    </button>)}
                {location.pathname === '/movies' && isSaved && (
                    <button className='card__save-button card__save-button_active' onClick={handleDeleteClick}>
                        <div className='card__save-icon card__save-icon_active'></div>
                    </button>)}
                {location.pathname === '/saved-movies' && (
                    <button className='card__save-button' onClick={handleDeleteClick}>
                        <div className='card__save-icon_saved'></div>
                    </button>)}

            </div>
            <a
            className="card__trailer-link"
            href={props.trailerLink}
            target="_blank"
            rel="noreferrer">
                <div
                className="card__image"
                style={{ backgroundImage: `url(https://api.nomoreparties.co${props.image})`}}>
                </div>
            </a>
        </div>
    )
}

export default MoviesCard;
