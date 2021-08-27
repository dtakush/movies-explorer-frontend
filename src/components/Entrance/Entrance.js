import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Компоненты
import logo from '../../images/logo.svg';

function Entrance(props) {
    let location = useLocation();

    return (
            <div className="entrance__container">
                <Link to="/" className="entrance__logo"><img src={logo} alt="Логотип проекта"/></Link>
                <h3 className="entrance__hello">{props.title}</h3>
                <form className="entrance__form">
                    {location.pathname === '/signin'
                    ? ''
                    :
                    <>
                    <p className="entrance__form-text">Имя</p>
                    <input
                    className="entrance__input entrance__input-name"
                    defaultValue="Введите имя"
                    type="text" />
                    </>
                    }
                    <p className="entrance__form-text">E-mail</p>
                    <input
                    className="entrance__input entrance__input-email"
                    defaultValue="Введите свою почту"
                    type="email" />
                    <p className="entrance__form-text">Пароль</p>
                    <input
                    className="entrance__input entrance__input-password"
                    type="password" />
                    <button
                    className={`${location.pathname === '/signin' 
                                    ? "entrance__button entrance__button-login"
                                    : "entrance__button"}`}
                    >
                        {props.buttonText}
                    </button>
                </form>
                <div className="entrance__come-in">
                    <p className="entrance__text">{props.entranceText}</p>
                    <Link
                    to={`${location.pathname === '/signin' 
                            ? "/signup"
                            : "/signin"}`}
                    className={`${location.pathname === '/signin' 
                            ? "entrance__link entrance__signin-link"
                            : "entrance__link entrance__signup-link"}`}
                     >               
                        {props.entranceLink}
                    </Link>
                </div> 
            </div>
    )
}

export default Entrance;