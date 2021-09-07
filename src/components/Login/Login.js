import React from 'react';
import useValidation from '../../utils/formValidation';

// Компоненты
import Entrance from '../Entrance/Entrance';

function Login(props) {
    const formValidation = useValidation();
    const { email, password } = formValidation.formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onLogin(email, password);
    };

    return (
        <section className="login">
            <Entrance
            name="login"
            title='Рады видеть!'
            buttonText='Войти'
            entranceText='Ещё не зарегистрированы?'
            entranceLink='Регистрация'
            onSubmit={handleSubmit}
            >
                <p className="entrance__form-text">E-mail</p>
                    <input
                    name="email"
                    id="login-email"
                    className="entrance__input entrance__input-email"
                    placeholder="Введите свою почту"
                    type="email"
                    required
                    value={formValidation.formValues.email || ''}
                    onChange={formValidation.handleInputChange}
                    />
                    <span
                    className="entrance__input-error"
                    id="login-email-error">{formValidation.errors.email}</span>

                    <p className="entrance__form-text">Пароль</p>
                    <input
                    name="password"
                    id="login-password"
                    className="entrance__input entrance__input-password"
                    placeholder="Введите пароль"
                    type="password"
                    required
                    minLength="5"
                    value={formValidation.formValues.password || ''}
                    onChange={formValidation.handleInputChange}
                    />
                    <span
                    className="entrance__input-error"
                    id="login-password-error">{formValidation.errors.password}</span>
            </Entrance>    
        </section>
    )
}

export default Login;