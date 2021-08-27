import React from 'react';

// Компоненты
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
    return (
        <section className="searchform">
            <div className="searchform__container">
                <form className="searchform__form">
                    <input className="searchform__input" placeholder="Фильм" />
                    <button className="searchform__button" type="button">
                        <div className="searchform__button_pic"></div>
                    </button>
                </form>
                <p className="searchform__text">Короткометражки</p>
                <FilterCheckbox />
            </div>
        </section>
        
    )
}

export default SearchForm;