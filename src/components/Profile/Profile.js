import React from 'react';

//Контекст
import { CurrentUserContext } from '../../context/CurrentUserContext';

// Компоненты
import useValidation from '../../utils/formValidation';

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const formValidation = useValidation(currentUser);

    const {
        formValues,
        errors,
        isInputValid,
        //resetForm,
        //setIsInputValid,
        handleInputChange,
    } = formValidation;

    const { name, email } = formValues;

    const buttonClassName = `${
        isInputValid 
        ? "profile__button profile__edit-button"
        : "profile__button profile__edit-button profile__edit-button_disabled"
    }`;

    /* function setSameInfo() {
        if ((currentUser.name === formValues.name) || (currentUser.email === formValues.email)) {
            setIsInputValid(false);
        }
    }

    React.useEffect(() => {
        setSameInfo();
        //eslint-disable-next-line
    }, []) */

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onUpdateUser(name, email);
        //resetForm();
    }

    return (
        <section className="profile">
            <div className="profile__container">
                <h2 className="profile__hello">Привет, {currentUser.name}!</h2>
                <form
                className="profile__form"
                onSubmit={handleSubmit}
                noValidate>
                    <div className="profile__edit-block profile__edit-name">
                        <div className="profile__edit-text-block">
                            <p className="profile__edit-text">Имя</p>
                            <input
                            className="profile__user-text"
                            id="name"
                            minLength="3"
                            name="name"
                            type="text"
                            placeholder={currentUser.name}
                            value={formValues.name || ''}
                            onChange={handleInputChange}
                            required
                            />
                        </div>
                        <span
                        className="profile__input-error"
                        id="profile__input-name-error">{errors.name}</span>
                    </div>
                    <div className="profile__edit-block profile__edit-email">
                        <div className="profile__edit-text-block">
                            <p className="profile__edit-text">E-mail</p>
                            <input
                            className="profile__user-text"
                            id="name"
                            minLength="3"
                            name="email"
                            type="email"
                            placeholder={currentUser.email}
                            value={formValues.email || ''}
                            onChange={handleInputChange}
                            required
                            />
                        </div>    
                        <span
                        className="profile__input-error"
                        id="profile__input-email-error">{errors.email}</span>
                    </div>

                    <button
                    className={buttonClassName}
                    type="submit">
                        {isInputValid ? "Сохранить" : "Редактировать"}
                    </button>

                    <button
                    onClick={props.onSignOut}
                    className="profile__button profile__exit-button"
                    type="button"
                    >
                        Выйти из аккаунта
                    </button>  
                </form>
            </div>
        </section>
    )
}

export default Profile;