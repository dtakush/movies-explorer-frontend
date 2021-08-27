import React from 'react';

// Компоненты
import Entrance from '../Entrance/Entrance';

function Register(props) {
    return (
        <section className="register">
            <Entrance
            title='Добро пожаловать!'
            buttonText='Зарегистрироваться'
            entranceText='Уже зарегистрированы?'
            entranceLink='Войти'
            />
        </section>
    )
}

export default Register;