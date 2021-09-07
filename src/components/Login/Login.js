import React from 'react';
import useValidation from '../../utils/formValidation';

// Компоненты
import Entrance from '../Entrance/Entrance';

function Login(props) {
    const {
        errors,
    } = useValidation({});

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }
        
    function handleChangePassword(e) {
        setPassword(e.target.value);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        props.onLogin({ email, password });
    }

    return (
        <section className="login">
            <Entrance
            title='Рады видеть!'
            buttonText='Войти'
            entranceText='Ещё не зарегистрированы?'
            entranceLink='Регистрация'
            onSubmit={handleSubmit}
            >
                <p className="entrance__form-text">E-mail</p>
                    <input
                    name="loginEmail"
                    id="login-email"
                    className="entrance__input entrance__input-email"
                    placeholder="Введите свою почту"
                    type="email"
                    required
                    value={email || ''}
                    onChange={handleChangeEmail} />
                    <span
                    className="entrance__input-error"
                    id="login-email-error">{errors.loginEmail}</span>

                    <p className="entrance__form-text">Пароль</p>
                    <input
                    name="loginPassword"
                    id="login-password"
                    className="entrance__input entrance__input-password"
                    placeholder="Введите пароль"
                    type="password"
                    required
                    minLength="5"
                    value={password || ''}
                    onChange={handleChangePassword} />
                    <span
                    className="entrance__input-error"
                    id="login-password-error">{errors.loginPassword}</span>
            </Entrance>    
        </section>
    )
}

export default Login;