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
            <SearchForm />
            <MoviesCardList
            cards={props.cards}
            />
            <Footer />
        </>    
    )
}

export default Movies;