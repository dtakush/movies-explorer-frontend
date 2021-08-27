import React from 'react';

// Компоненты
import savedCards from '../../utils/savedCards';
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
            cards={savedCards}
            />
            <Footer />
        </>    
    )
}

export default SavedMovies;