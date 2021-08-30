import React from 'react';
import { NavLink } from 'react-router-dom';

function NavigationPopup(props) {
    return (
        <section className={`nav-popup ${props.isOpen ? 'nav-popup_open' : ''}`}>
            <div className="nav-popup__container">
            <button className="nav-popup__close-button" onClick={props.onClose} />
                <ul className="nav-popup__links">
                    <li className="nav-popup__link">
                        <NavLink
                        to="/"
                        className="nav-popup__nav nav-popup__link_main"
                        >Главная</NavLink>
                    </li>
                    <li className="nav-popup__link">
                        <NavLink
                        to="/movies"
                        className="nav-popup__nav nav-popup__link_movies"
                        >Фильмы</NavLink>
                    </li>
                    <li className="nav-popup__link">
                        <NavLink
                        to="/saved-movies"
                        className="nav-popup__nav nav-popup__nav_saved-movies"
                        >Сохраненные фильмы</NavLink>
                    </li>
                </ul>
                <div className="nav-popup__accaunt">
                    <NavLink
                    to="/profile"
                    className="header__link header__profile-link"
                    >Аккаунт
                        <button className="header__profile-button" type="button" />
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default NavigationPopup;