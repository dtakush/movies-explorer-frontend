import React from 'react';

function FilterCheckbox(props) {
    return (
        <div className="checkbox">
            <p className="checkbox__text">Короткометражки</p>
            <div className="checkbox__container">
                <input type="checkbox" value="None" id="filter" name="check" className="checkbox__input" />
                <label className="checkbox__label"></label>
            </div>
        </div>
    )
}

export default FilterCheckbox;