import React from 'react';

// Компоненты
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


function Movies(props) {
    return (
        <>
            <Header />
            <SearchForm
            onSearch={props.onSearch}
            />

            <MoviesCardList
            cards={props.cards}
            hideButton={props.hideButton}
            noResult={props.noResult}
            onSave={props.onSave}
            isMovieSaved={props.isMovieSaved}
            onDelete={props.onDelete}
            setMovieSavedIcon={props.setMovieSavedIcon}
            />
            <Footer />
        </>    
    )
}

export default Movies;