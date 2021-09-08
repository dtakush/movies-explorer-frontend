import React from 'react';

// Компоненты
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


function SavedMovies(props) {
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
            onDelete={props.onDelete}
            isSavedMovies={props.isSavedMovies}
            />
            <Footer />
        </>    
    )
}

export default SavedMovies;