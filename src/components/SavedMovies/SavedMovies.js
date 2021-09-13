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
            onCheck={props.onCheck}
            isLoading={props.isLoading}
            />
            <Footer />
        </>    
    )
}

export default SavedMovies;