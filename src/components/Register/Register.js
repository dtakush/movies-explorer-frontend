import React from 'react';
import useValidation from '../../utils/formValidation';

// Компоненты
import Entrance from '../Entrance/Entrance';

function Register(props) {
    const { handleInputChange,
        isInputValid,
        resetForm,
        formValues,
        errors,
        handleEmailChange } = useValidation();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onRegister(formValues.name, formValues.email, formValues.password);
        resetForm();
    };

    return (
        <section className="register">
            <Entrance
            name="register"
            title='Добро пожаловать!'
            buttonText='Зарегистрироваться'
            entranceText='Уже зарегистрированы?'
            entranceLink='Войти'
            onSubmit={handleSubmit}
            isInputValid={isInputValid}
            >
                    <p className="entrance__form-text">Имя</p>
                    <input
                    name="name"
                    id="register-name"
                    className="entrance__input entrance__input-name"
                    placeholder="Введите имя"
                    type="text"
                    required
                    minLength="3"
                    value={formValues.name || ''}
                    onChange={handleInputChange}
                    />
                    <span
                    className="entrance__input-error"
                    id="entrance__input-name-error">{errors.name}</span>

                    <p className="entrance__form-text">E-mail</p>
                    <input
                    name="email"
                    id="register-email"
                    className="entrance__input entrance__input-email"
                    placeholder="Введите свою почту"
                    type="email"
                    required
                    value={formValues.email || ''}
                    onChange={handleEmailChange}
                    />
                    <span
                    className="entrance__input-error"
                    id="entrance__input-email-error">{errors.email}</span>

                    <p className="entrance__form-text">Пароль</p>
                    <input
                    name="password"
                    id="register-password"
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
                    id="register-password-error">{errors.password}</span>

            </Entrance>
        </section>
    )
}

export default Register;