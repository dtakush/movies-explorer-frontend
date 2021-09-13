import React from 'react';
import { useLocation } from 'react-router-dom';

// Компоненты
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList(props) {
    let location = useLocation();

    const maxWindowSize = 1279;
    const midWindowSize = 810;
    const minWindowSize = 319;

    const [numberOfMovies, setNumberOfMovies] = React.useState(12);
    const [loadMore, setLoadMore] = React.useState(3);
    const [windowWidth, setWindowWidth] = React.useState(0);

    React.useEffect(() => {
        function updateWindowWidth() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', updateWindowWidth);
        updateWindowWidth();
    }, []);

    React.useEffect(() => {
        if(windowWidth > maxWindowSize) {
            setNumberOfMovies(12);
            setLoadMore(3);
        } else if (windowWidth < maxWindowSize && windowWidth > midWindowSize) {
            setNumberOfMovies(8);
            setLoadMore(2);
        } else if (windowWidth < midWindowSize && windowWidth > minWindowSize) {
            setNumberOfMovies(5);
            setLoadMore(5);
        }
    }, [windowWidth]);

    function clickLoadMore() {
        return setNumberOfMovies(numberOfMovies + loadMore);
    }

 
    return (
        <section className="movies-cards">
            {props.isLoading && <Preloader/>}

            {props.noResult
                ? <p className="movies-cards__no-result">Поиск не дал результатов</p>
                : ''}


            <div className="movies-cards__container">
                {props.cards.slice(0, numberOfMovies).map((item) => {
                return (
                    <MoviesCard
                    movie={item}
                    trailer={item.trailerLink}
                    key={item.id || item.movieId}
                    onSave={props.onSave}
                    onDelete={props.onDelete}
                    savedMovies={props.savedMovies}
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