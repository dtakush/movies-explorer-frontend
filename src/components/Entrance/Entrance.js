import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useValidation from '../../utils/formValidation';

// Компоненты
import logo from '../../images/logo.svg';

function Entrance(props) {
    let location = useLocation();
    const {
        formValues,
        errors,
        isInputValid,
        handleInputChange,
        } = useValidation({});

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
                        name="inputName"
                        className="entrance__input entrance__input-name"
                        placeholder="Введите имя"
                        type="text"
                        required
                        minLength="3"
                        value={formValues.inputName || ''}
                        onChange={handleInputChange} />
                        <span
                        className="entrance__input-error"
                        id="entrance__input-name-error">{errors.inputName}</span>
                    </>
                    }
                    <p className="entrance__form-text">E-mail</p>
                    <input
                    name="inputEmail"
                    className="entrance__input entrance__input-email"
                    placeholder="Введите свою почту"
                    type="email"
                    required
                    value={formValues.inputEmail || ''}
                    onChange={handleInputChange} />
                    <span
                    className="entrance__input-error"
                    id="entrance__input-email-error">{errors.inputEmail}</span>

                    <p className="entrance__form-text">Пароль</p>
                    <input
                    name="inputPassword"
                    className="entrance__input entrance__input-password"
                    placeholder="Введите пароль"
                    type="password"
                    required
                    minLength="5"
                    value={formValues.inputPassword || ''}
                    onChange={handleInputChange} />
                    <span
                    className="entrance__input-error"
                    id="entrance__input-password-error">{errors.inputPassword}</span>

                    <button
                    className={`${location.pathname === '/signin' 
                                    ? "entrance__button entrance__button-login"
                                    : "entrance__button"}`}
                    disabled={!isInputValid}
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