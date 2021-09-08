import React from 'react';

// Компоненты
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';


function SavedMovies(props) {
    return (
        <>
            <Header />
            <SearchForm
            onSearch={props.onSearch}
            />

            {props.isLoading && <Preloader/>}

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