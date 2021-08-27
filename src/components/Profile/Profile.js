import React from 'react';

// Компоненты
import Header from '../Header/Header';

function Profile(props) {
    return (
         <section className="profile">
            <Header />
            <div className="profile__container">
                <h2 className="profile__hello">Привет, Виталий!</h2>
                <div className="profile__edit-block profile__edit-name">
                    <p className="profile__edit-text">Имя</p>
                    <p className="profile__user-text">Виталий</p>
                </div>
                <div className="profile__edit-block profile__edit-email">
                    <p className="profile__edit-text">E-mail</p>
                    <p className="profile__user-text">pochta@yandex.ru</p>
                </div>
                <button className="profile__button profile__edit-button" type="submit">Редактировать</button>
                <button className="profile__button profile__exit-button" type="button">Выйти из аккаунта</button>
             </div>
         </section>
    )
}

export default Profile;