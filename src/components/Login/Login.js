import React from 'react';

// Компоненты
import Entrance from '../Entrance/Entrance';

function Login(props) {
    return (
        <section className="login">
            <Entrance
            title='Рады видеть!'
            buttonText='Войти'
            entranceText='Ещё не зарегистрированы?'
            entranceLink='Регистрация'
            />
        </section>
    )
}

export default Login;