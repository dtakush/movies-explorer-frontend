import React from 'react';
import { useLocation } from 'react-router-dom';

import { mainBaseUrl } from '../../utils/constants';

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

    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    console.log(localStorage);
    //const currentMovie = savedMovies.find((movie) => movie.nameRU === props.movie.nameRU);

    const movie = {
        country: props.movie.country || 'No information',
        director: props.movie.director || 'No information',
        duration: props.movie.duration || 0,
        year: props.movie.year || 'No information',
        description: props.movie.description || 'No information',
        image: mainBaseUrl + props.movie.image,
        trailer: props.movie.trailer,
        nameRU: props.movie.nameRU || 'No information',
        nameEN: props.movie.nameEN || 'No information',
        thumbnail: mainBaseUrl + props.movie.thumbnail,
        movieId: props.movie.movieId,
    }

    //сохранить фильм
    function handleSave() {
        props.onSave(movie);
        //console.log(movie);
        setIsSaved(true);
    }

    //удалить из сохраненного
    function handleRemoveLike() {
        setIsSaved(false);
        //console.log(currentMovie);
        //props.onDeleteMovie(currentMovie._id);
    }

    //удалить сохраненный
    function handleDeleteMovie() {
        props.onDelete(props.movie._id);
        setIsSaved(false);
    }

    return (
        <div className="card">
            <div className="card__menu">
                <div className="card__text">
                    <h5 className="card__title">{props.nameRU}</h5>
                    <p className="card__duraton">{durationToString(props.duration)}</p>
                </div>

                {location.pathname === '/movies' && !isSaved && (
                    <button className='card__save-button' onClick={handleSave}>
                        <div className='card__save-icon'></div>
                    </button>)}
                {location.pathname === '/movies' && isSaved && (
                    <button className='card__save-button card__save-button_active' onClick={handleRemoveLike}>
                        <div className='card__save-icon card__save-icon_active'></div>
                    </button>)}
                {location.pathname === '/saved-movies' && (
                    <button className='card__save-button' onClick={handleDeleteMovie}>
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
