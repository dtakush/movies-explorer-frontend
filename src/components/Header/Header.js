import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import logo from '../../images/logo.svg';

function Header(props) {
    let location = useLocation();

    return (
        <header className={`${location.pathname === '/' ? "header" : "header header_loggedin"}`}>
            <div className="header__info">
            <NavLink to="/" className="header__logo"><img src={logo} alt="Логотип проекта"/></NavLink>
                {location.pathname === '/' ? 
                    <div className="header__nav">
                        <NavLink to="/signup" className="header__link header__signup">Регистрация</NavLink>
                        <NavLink to="/signin" className="header__link header__signin">Войти</NavLink>
                    </div>
                :
                    <div className="header__nav header__nav_loggedin">
                        <div className="header__links">
                            <NavLink to="/movies" className="header__link header__movies-link">Фильмы</NavLink>
                            <NavLink to="/saved-movies" className="header__link header__saved-movies-link">Сохранённые фильмы</NavLink>
                        </div>    
                        <NavLink to="/profile" className="header__link header__profile-link">
                            Аккаунт
                            <button className="header__profile-button" type="button" />
                        </NavLink>
                    </div>
                }
                
            </div>
        </header>
    )
}

export default Header;