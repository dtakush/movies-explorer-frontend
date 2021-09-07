import React from 'react';
import useValidation from '../../utils/formValidation';

// Компоненты
import Entrance from '../Entrance/Entrance';

function Register(props) {
    const {
        errors,
    } = useValidation({});

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    function handleChangeName(e) {
        setName(e.target.value);
    }
    
    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }
        
    function handleChangePassword(e) {
        setPassword(e.target.value);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        props.onRegister({ email, password });
    }

    return (
        <section className="register">
            <Entrance
            title='Добро пожаловать!'
            buttonText='Зарегистрироваться'
            entranceText='Уже зарегистрированы?'
            entranceLink='Войти'
            onSubmit={handleSubmit}
            >
                <p className="entrance__form-text">Имя</p>
                    <input
                    name="registerName"
                    id="register-name"
                    className="entrance__input entrance__input-name"
                    placeholder="Введите имя"
                    type="text"
                    required
                    minLength="3"
                    value={name || ''}
                    onChange={handleChangeName} />
                    <span
                    className="entrance__input-error"
                    id="entrance__input-name-error">{errors.registerName}</span>

                    <p className="entrance__form-text">E-mail</p>
                    <input
                    name="registerEmail"
                    id="register-email"
                    className="entrance__input entrance__input-email"
                    placeholder="Введите свою почту"
                    type="email"
                    required
                    value={email || ''}
                    onChange={handleChangeEmail} />
                    <span
                    className="entrance__input-error"
                    id="entrance__input-email-error">{errors.registerEmail}</span>

                    <p className="entrance__form-text">Пароль</p>
                    <input
                    name="registerPassword"
                    id="register-password"
                    className="entrance__input entrance__input-password"
                    placeholder="Введите пароль"
                    type="password"
                    required
                    minLength="5"
                    value={password || ''}
                    onChange={handleChangePassword} />
                    <span
                    className="entrance__input-error"
                    id="register-password-error">{errors.registerPassword}</span>

            </Entrance>
        </section>
    )
}

export default Register;