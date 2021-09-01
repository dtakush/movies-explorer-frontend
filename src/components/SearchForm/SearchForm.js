import React from 'react';

// Компоненты
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
    return (
        <section className="searchform">
            <div className="searchform__container">
                <form className="searchform__form">
                    <input className="searchform__input" placeholder="Фильм" required />
                    <button className="searchform__button" type="button">
                        <div className="searchform__button_pic"></div>
                    </button>
                </form>
                <FilterCheckbox />
            </div>
        </section>
        
    )
}

export default SearchForm;