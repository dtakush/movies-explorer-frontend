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
            onCheck={props.onCheck}
            shortMovie={props.shortMovie}
            />

            <MoviesCardList
            cards={props.cards}
            hideButton={props.hideButton}
            onSave={props.onSave}
            onDelete={props.onDelete}
            savedMovies={props.savedMovies}
            noResult={props.noResult}
            isLoading={props.isLoading}
            />
            <Footer />
        </>    
    )
}

export default Movies;