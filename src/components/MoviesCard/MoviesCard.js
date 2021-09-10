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

    return (
        <div className="card">
            <div className="card__menu">
                <div className="card__text">
                    <h5 className="card__title">{props.card.nameRU}</h5>
                    <p className="card__duraton">{durationToString(props.card.duration)}</p>
                </div>

                {location.pathname === '/movies' && (
                    <button className='card__save-button'>
                        <div className='card__save-icon'></div>
                    </button>)}
                {location.pathname === '/movies' && (
                    <button className='card__save-button card__save-button_active'>
                        <div className='card__save-icon card__save-icon_active'></div>
                    </button>)}
                {location.pathname === '/saved-movies' && (
                    <button className='card__save-button'>
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
                style={{ backgroundImage: `url(https://api.nomoreparties.co${props.card.image.url})`}}>
                </div>
            </a>
        </div>
    )
}

export default MoviesCard;