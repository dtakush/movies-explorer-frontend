import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

// Компоненты
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
    let location = useLocation();

    const maxWindowSize = 1279;
    const midWindowSize = 810;
    const minWindowSize = 319;

    const [renderedMovies, setRenderedMovies] = useState([]);
    const [moviesCount, setMoviesCount] = useState(0);
    const [extraRow, setExtraRow] = useState(3);

    const getNumberOfMovies = (windowSize) => {
        if(windowSize > maxWindowSize) {
            return {first: 12, extra: 3};
        }
        if (windowSize < maxWindowSize && windowSize > midWindowSize) {
            return {first: 8, extra: 2}
        }
        if (windowSize < midWindowSize && windowSize > minWindowSize) {
            return {first: 5, extra: 5}
        }
    }

    const generateExtraRow = () => {
        const count = Math.min(props.cards.length, moviesCount + extraRow);
        const extraMovies = props.cards.slice(moviesCount, count);
        
        setRenderedMovies([...renderedMovies, ...extraMovies]);
        setMoviesCount(count);
    };

    const renderMoreMovies = () => generateExtraRow();

    React.useEffect(() => {
        const windowInnerWidth = window.innerWidth;
        const totalNumberOfMovies = Math.min(props.cards.length, getNumberOfMovies(windowInnerWidth).first);
        setRenderedMovies(props.cards.slice(0, totalNumberOfMovies));
        /* console.log(windowInnerWidth); */
        /* console.log(renderedMovies); */
    }, [props.cards])

    return (
        <section className="movies-cards">
            {props.noResult
                ? <p className="movies-cards__no-result">Поиск не дал результатов</p>
                : ''}
            <div className="movies-cards__container">
                {renderedMovies.map((item) => {
                return (
                    <MoviesCard
                    key={item.id}
                    movie={item}
                    nameRU={item.nameRU}
                    duration={item.duration}
                    trailerLink={item.trailerLink}
                    image={item.image.url}
                    onSaveClick={props.onSaveClick}
                    onDelete={props.onDelete}
                    savedMovies={props.savedMovies}
                    isSavedMovie={props.isSavedMovie}
                    />
                    )
                })}
            </div>
            <button
            type="button"
            onClick={renderMoreMovies}
            className={`${location.pathname === '/movies'
                            ? "movies-cards__more-button"
                            : "movies-cards__more-button_saved"}
                        ${props.cards.length > renderedMovies.length
                            ? ''
                            : 'movies-cards__more-button_hide'}`}
            >
                Ещё
            </button>
        </section>
    )
}

export default MoviesCardList;
