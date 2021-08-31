import React from 'react';
import { useLocation } from 'react-router-dom';


function MoviesCard(props) {
    let location = useLocation();

    return (
        <div className="card">
            <div className="card__menu">
                <div className="card__text">
                    <h5 className="card__title">{props.title}</h5>
                    <p className="card__duraton">{props.duration}</p>
                </div>
                <button className="card__save-button" type="button">
                    <div
                    className={`${location.pathname === '/movies'
                            ? "card__save-icon"
                            : "card__save-icon_saved"}`
                    }></div>
                </button>
            </div>
            <div className="card__image"  style={{ backgroundImage: `url(${props.link})` }}></div>
        </div>
    )
}

export default MoviesCard;