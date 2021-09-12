import React from 'react';

// Компоненты
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';


function Movies(props) {
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
            onSave={props.onSave}
            onDelete={props.onDelete}
            isSaved={props.isSaved}
            />
            <Footer />
        </>    
    )
}

export default Movies;