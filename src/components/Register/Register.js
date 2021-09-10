import React from 'react';
import useValidation from '../../utils/formValidation';

// Компоненты
import Entrance from '../Entrance/Entrance';

function Register(props) {
    const formValidation = useValidation();
    const { name, email, password } = formValidation.formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password)
        props.onRegister(name, email, password);
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
                    value={formValidation.formValues.name || ''}
                    onChange={formValidation.handleInputChange}
                    />
                    <span
                    className="entrance__input-error"
                    id="entrance__input-name-error">{formValidation.errors.name}</span>

                    <p className="entrance__form-text">E-mail</p>
                    <input
                    name="email"
                    id="register-email"
                    className="entrance__input entrance__input-email"
                    placeholder="Введите свою почту"
                    type="email"
                    required
                    value={formValidation.formValues.email || ''}
                    onChange={formValidation.handleInputChange}
                    />
                    <span
                    className="entrance__input-error"
                    id="entrance__input-email-error">{formValidation.errors.email}</span>

                    <p className="entrance__form-text">Пароль</p>
                    <input
                    name="password"
                    id="register-password"
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
                    id="register-password-error">{formValidation.errors.password}</span>

            </Entrance>
        </section>
    )
}

export default Register;