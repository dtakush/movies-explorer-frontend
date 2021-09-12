import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

// Компоненты
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
    let location = useLocation();

    const maxWindowSize = 1279;
    const midWindowSize = 810;
    const minWindowSize = 319;

    const [numberOfMovies, setNumberOfMovies] = React.useState(12);
    const [loadMore, setLoadMore] = React.useState(3);

    React.useEffect((windowSize) => {
        if(windowSize > maxWindowSize) {
            setNumberOfMovies(12);
            setLoadMore(3);
        }
        if (windowSize < maxWindowSize && windowSize > midWindowSize) {
            setNumberOfMovies(8);
            setLoadMore(2);
        }
        if (windowSize < midWindowSize && windowSize > minWindowSize) {
            setNumberOfMovies(5);
            setLoadMore(5);
        }
    }, []);

    function clickLoadMore() {
        return setNumberOfMovies(numberOfMovies + loadMore);
    }

    console.log(numberOfMovies);
 
    return (
        <section className="movies-cards">
            <div className="movies-cards__container">
                {props.cards.slice(0, numberOfMovies).map((item) => {
                return (
                    <MoviesCard
                    movie={item}
                    trailer={item.trailerLink}
                    key={item.id}
                    onSave={props.onSave}
                    onDelete={props.onDelete}
                    isSaved={props.isSaved}
                    />
                    )
                })}
            </div>

            {(props.cards.length >= numberOfMovies)
                ? <button
                    type="button"
                    onClick={clickLoadMore} 
                    className={`${location.pathname === '/movies'
                            ? "movies-cards__more-button"
                            : "movies-cards__more-button_saved"}`}> Еще </button>
                : ''
            }
            
        </section>
    )
}

export default MoviesCardList;