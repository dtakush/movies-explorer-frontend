import React from 'react';
import { useLocation, useHistory } from "react-router-dom";

function NotFound(props) {
    const history = useHistory();
    const location = useLocation();

    function goToPreviousPath() {
        history.goBack();
        if (location.pathname === history.location.pathname) {
            history.goBack();
        }
      }

    return (
        <section className="not-found">
            <div className="not-found__container">
                <h1 className="not-found__title">404</h1>
                <p className="not-found__subtitle">Страница не найдена</p>
            </div>

            <button className='not-found__button' to='/' onClick={goToPreviousPath}>
                Назад
            </button>            
        </section>
    )
}

export default NotFound;

/* <button
                className="not-found__button"
                type="button"
                onClick={history.goBack}
            >
                Назад
            </button> */