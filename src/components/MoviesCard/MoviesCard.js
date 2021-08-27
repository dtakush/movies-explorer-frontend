import React from 'react';


function MoviesCard(props) {

    return (
        <div className="card">
            <div className="card__menu">
                <div className="card__text">
                    <h5 className="card__title">{props.title}</h5>
                    <p className="card__duraton">{props.duration}</p>
                </div>
                <button className="card__save-button" type="button">
                    <div className="card__save-icon"></div>
                </button>
            </div>
            <div className="card__image"  style={{ backgroundImage: `url(${props.link})` }}></div>
        </div>
    )
}

export default MoviesCard;