import React from 'react';
import { useLocation } from 'react-router-dom';

// Компоненты
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
    let location = useLocation();

    return (
        <section className="movies-cards">
            <div className="movies-cards__container">
                {props.cards.cards.map((item) => {
                return (
                    <MoviesCard
                    title={item.title}
                    duration={item.duration}
                    link={item.link}
                    />
                    )
                })}
            </div>
            <button
            type="button"
            className={`${location.pathname === '/movies'
                            ? "movies-cards__more-button"
                            : "movies-cards__more-button_saved"}`
                        }>
                Ещё
            </button>
        </section>
    )
}

export default MoviesCardList;
