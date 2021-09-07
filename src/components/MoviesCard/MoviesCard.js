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
    const isButtonActive = props.setMovieSavedIcon(props.movie);

    function saveMovie() {
        props.onSave({
            country: props.movie.country,
            director: props.movie.director,
            duration: props.movie.duration,
            year: props.movie.year,
            description: props.movie.description,
            image: mainBaseUrl + props.movie.image,
            trailer: props.movie.trailer,
            nameRU: props.movie.nameRU,
            nameEN: props.movie.nameEN,
            thumbnail: mainBaseUrl + props.movie.thumbnail,
            movieId: props.movie.movieId,
        })
    }

    function deleteMovie() {
        props.onDelete(props.movie)
    }

    return (
        <div className="card">
            <div className="card__menu">
                <div className="card__text">
                    <h5 className="card__title">{props.nameRU}</h5>
                    <p className="card__duraton">{durationToString(props.duration)}</p>
                </div>

                {location.pathname === '/movies' && !isButtonActive && (
                    <button className='card__save-button' onClick={saveMovie}>
                        <div className='card__save-icon'></div>
                    </button>)}
                {location.pathname === '/movies' && isButtonActive && (
                    <button className='card__save-button card__save-button_active' onClick={deleteMovie}>
                        <div className='card__save-icon card__save-icon_active'></div>
                    </button>)}
                {location.pathname === '/saved-movies' && (
                    <button className='card__save-button' onClick={deleteMovie}>
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
