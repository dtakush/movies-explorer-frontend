import React from 'react';
import useValidation from '../../utils/formValidation';

// Компоненты
import Entrance from '../Entrance/Entrance';

function Login(props) {
    const { handleInputChange,
        isInputValid,
        resetForm,
        formValues,
        errors,
        handleEmailChange } = useValidation();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onLogin(formValues.email, formValues.password);
        resetForm();
    };

    console.log(formValues.email, formValues.password);

    return (
        <section className="login">
            <Entrance
            name="login"
            title='Рады видеть!'
            buttonText='Войти'
            entranceText='Ещё не зарегистрированы?'
            entranceLink='Регистрация'
            onSubmit={handleSubmit}
            isInputValid={isInputValid}
            >
                    <p className="entrance__form-text">E-mail</p>
                    <input
                    name="email"
                    id="login-email"
                    className="entrance__input entrance__input-email"
                    placeholder="Введите свою почту"
                    type="email"
                    required
                    value={formValues.email || ''}
                    onChange={handleEmailChange}
                    />
                    <span
                    className="entrance__input-error"
                    id="login-email-error">{errors.email}</span>

                    <p className="entrance__form-text">Пароль</p>
                    <input
                    name="password"
                    id="login-password"
                    className="entrance__input entrance__input-password"
                    placeholder="Введите пароль"
                    type="password"
                    required
                    minLength="5"
                    value={formValues.password || ''}
                    onChange={handleInputChange}
                    />
                    <span
                    className="entrance__input-error"
                    id="login-password-error">{errors.password}</span>
            </Entrance>    
        </section>
    )
}

export default Login;