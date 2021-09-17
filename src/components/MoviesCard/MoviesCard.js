import React from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {
    let location = useLocation();
    // const isSaved = props.savedMovies.find(e => e.movieId === props.movie.id);

    //Изменение формата продолжительности
    function durationToString(dur) {
        const hours = Math.trunc(dur/60);
        const minutes = dur%60;
        return `${hours > 0 ? `${hours}ч ` : ''}${minutes}м`;
    }
    

    function handleSaveMovie(e) {
        e.preventDefault();
        props.onSave(props.movie);
    }

    function handleDeleteMovie(e) {
        e.preventDefault();
        props.onDelete(props.movie);
    }


    return (
        <div className="card">
            <div className="card__menu">
                <div className="card__text">
                    <h5 className="card__title">{props.movie.nameRU}</h5>
                    <p className="card__duraton">{durationToString(props.movie.duration)}</p>
                </div>

                {location.pathname === '/movies' && 
                !(props.savedMovies.find(e => e.movieId === props.movie.id)) && (
                    <button className='card__save-button' onClick={handleSaveMovie}>
                        <div className='card__save-icon'></div>
                    </button>)}
                {location.pathname === '/movies' &&
                (props.savedMovies.find(e => e.movieId === props.movie.id)) && (
                    <button className='card__save-button card__save-button_active' onClick={handleDeleteMovie}>
                        <div className='card__save-icon card__save-icon_active'></div>
                    </button>)}
                {location.pathname === '/saved-movies' && (
                    <button className='card__save-button' onClick={handleDeleteMovie}>
                        <div className='card__save-icon_saved'></div>
                    </button>)}

            </div>
            
                {location.pathname === '/movies' && (
                    <a
                    className="card__trailer-link"
                    href={props.trailer}
                    target="_blank"
                    rel="noreferrer">
                        <div
                        className="card__image"
                        style={{ backgroundImage: `url(https://api.nomoreparties.co${props.movie.image.url})`}}>
                        </div>
                    </a>
                )}

                {location.pathname === '/saved-movies' && (
                    <a
                    className="card__trailer-link"
                    href={props.movie.trailer}
                    target="_blank"
                    rel="noreferrer">
                        <div
                        className="card__image"
                        style={{ backgroundImage: `url(${props.movie.image})`}}>
                        </div>
                    </a>
                )}

            
        </div>
    )
}

export default MoviesCard;