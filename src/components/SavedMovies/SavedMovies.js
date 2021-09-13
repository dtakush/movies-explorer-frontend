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
            <SearchForm />
            <MoviesCardList
            />
            <Footer />
        </>    
    )
}

export default SavedMovies;