import React from 'react';

function FilterCheckbox(props) {
    return (
        <div className="checkbox">
            <p className="checkbox__text">Короткометражки</p>
            <label className="checkbox__container">
                <input
                type="checkbox"
                value="None"
                id="filter"
                name="check"
                className="checkbox__input"
                onChange={props.onCheck}
                checked={props.shortMovie}
                />
                <i className="checkbox__indicator"></i>
            </label>
        </div>
    )
}

export default FilterCheckbox;