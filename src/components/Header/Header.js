import React from 'react';

import logo from '../../images/logo.svg';

function Header(props) {
    return (
        <header className="header">
            <div className="header__info">
                <img src={logo} className="header__logo" alt="Логотип проекта" />

                <div className="header__nav">
                    <p className="header__link header__signup">Регистрация</p>
                    <div className="header__signin">
                        <p className="header__link header__signin-text">Войти</p>
                    </div>
                </div>   
            </div>
        </header>
    )
}

export default Header;