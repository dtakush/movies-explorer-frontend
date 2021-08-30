import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";

import logo from '../../images/logo.svg';

import NavigationPopup from '../NavigationPopup/NavigationPopup';

function Header(props) {
    let location = useLocation();
    const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

    const [isMenuPopupOpen, setIsMenuPopupOpen] = React.useState(false);


    //Открытие попапа аватара
    function handleMenuClick() {
     setIsMenuPopupOpen(!isMenuPopupOpen);
   }
 
   function closePopup() {
     setIsMenuPopupOpen(false);
   }

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
                    <>
                        {isMobile ?
                        <>
                            <button
                            className="header__nav-button"
                            type="button"
                            onClick={handleMenuClick} />
                            <NavigationPopup
                            isOpen={isMenuPopupOpen}
                            onClose={closePopup} />
                        </>
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
                    </>
                }
            </div>
        </header>
    )
}

export default Header;