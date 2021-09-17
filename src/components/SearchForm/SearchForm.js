import React from 'react';

// Компоненты
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {

    const [keyword, setKeyword] = React.useState('');
    const [isSearchValid, setIsSearchValid] = React.useState(true);

    function handleSearch(e) {
        setKeyword(e.target.value);
        setIsSearchValid(e.target.checkValidity());
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onSearch(keyword);
    }

    return (
        <section className="searchform">
            <div className="searchform__container">
                <form
                className="searchform__form"
                onSubmit={handleSubmit}
                noValidate>
                    <input
                    onChange={handleSearch}
                    value={keyword || ''}
                    id="search"
                    type="text"
                    className="searchform__input"
                    placeholder="Фильм"
                    required />

                    <button
                    className={`searchform__button ${isSearchValid
                        ? ''
                        : 'searchform__button_disabled'}`}
                    type='submit'
                    >
                        <div className="searchform__button_pic"></div>
                    </button>
                </form>
                <FilterCheckbox
                onCheck={props.onCheck}
                shortMovie={props.shortMovie} />
            </div>
        </section>
        
    )
}

export default SearchForm;