import React from 'react';

// Компоненты
import Header from '../Header/Header';
import movieCards from '../../utils/movieCards';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


function Movies(props) {
    return (
        <>
            <Header />
            <SearchForm />
            <MoviesCardList
            cards={movieCards}
            />
            <Footer />
        </>    
    )
}

export default Movies;