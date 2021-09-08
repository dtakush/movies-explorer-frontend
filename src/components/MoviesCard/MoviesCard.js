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

    //Сохранение фильма
    const [isMovieSaved, setIsMovieSaved] = React.useState(false);

    const setLikes = React.useCallback(() => {
        const isMovieLiked = props.savedMovies.find((movie) => movie.movieId === props.movie.id);
        if (isMovieLiked) {
        setIsMovieSaved(true);
        } else {
        setIsMovieSaved(false);
        }
    }, [props.movie.id, props.savedMovies]);

    React.useEffect(() => {
        setLikes();
    }, [setLikes]);
    

    function handleSaveClick() {
        if (!isMovieSaved) {
            props.onSaveClick({
                country: props.movie.country || "no country",
                director: props.movie.director,
                duration: props.movie.duration,
                year: props.movie.year,
                description: props.movie.description,
                image: props.movie.image.url,
                trailer: props.movie.trailerLink || "trailer",
                movieId: props.movie.id,
                nameRU: props.movie.nameRU || "no nameRU",
                nameEN: props.movie.nameEN || "no nameEN",
                thumbnail: props.movie.image.formats.thumbnail.url
            });
            setIsMovieSaved(true);
        } else {
            const savedMovie = props.savedMovies.find((movie) => movie.movieId === props.movie.id);
            props.onDelete(savedMovie);
            setIsMovieSaved(false);
        }
    }

    function handleDeleteClick() {
        props.onDelete(props.movie);
    }

    return (
        <div className="card">
            <div className="card__menu">
                <div className="card__text">
                    <h5 className="card__title">{props.nameRU}</h5>
                    <p className="card__duraton">{durationToString(props.duration)}</p>
                </div>

                {location.pathname === '/movies' && !isMovieSaved && (
                    <button className='card__save-button' onClick={handleSaveClick}>
                        <div className='card__save-icon'></div>
                    </button>)}
                {location.pathname === '/movies' && isMovieSaved && (
                    <button className='card__save-button card__save-button_active' onClick={handleSaveClick}>
                        <div className='card__save-icon card__save-icon_active'></div>
                    </button>)}
                {location.pathname === '/saved-movies' && (
                    <button className='card__save-button' onClick={handleDeleteClick}>
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
