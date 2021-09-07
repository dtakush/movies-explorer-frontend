import React from 'react';

// Компоненты
import Header from '../Header/Header';
import formValidation from '../../utils/formValidation';

function Profile(props) {

    const {
        formValues,
        setFormValues,
        errors,
        setIsInputValid,
        handleInputChange,
    } = formValidation;

    React.useEffect(() => {
        setIsInputValid(true);
        setFormValues(props.currentUser);
    }, [props.currentUser, setFormValues, setIsInputValid]);

    return (
         <section className="profile">
            <Header />
            
            <div className="profile__container">
                <h2 className="profile__hello">Привет, {props.userData.name}!</h2>
                <form className="profile__edit-block profile__edit-name">
                    <div className="profile__edit-block profile__edit-name">
                        <lable className="profile__edit-text">Имя</lable>
                        <input
                        className="profile__user-text"
                        id="name"
                        minLength="3"
                        name="name"
                        type="text"
                        placeholder="Введите имя"
                        value={formValues.inputName || ''}
                        onChange={handleInputChange}
                        required
                        />
                        <span
                        className="entrance__input-error"
                        id="entrance__input-name-error">{errors.inputName}</span>
                    </div>
                    <div className="profile__edit-block profile__edit-email">
                        <lable className="profile__edit-text">E-mail</lable>
                        <input
                        className="profile__user-text"
                        id="name"
                        minLength="3"
                        name="email"
                        type="email"
                        placeholder="Введите свою почту"
                        value={formValues.inputEmail || ''}
                        onChange={handleInputChange}
                        required
                        />
                        <span
                        className="entrance__input-error"
                        id="entrance__input-email-error">{errors.inputEmail}</span>
                    </div>
                    <button className="profile__button profile__edit-button" type="submit">Редактировать</button>
                    <button className="profile__button profile__exit-button" type="button">Выйти из аккаунта</button>  
                </form>
             </div>
         </section>
    )
}

export default Profile;