import React from 'react';

function Footer(props) {
    return (
        <section className="footer">
            <div className="footer__container">
                <p className="footer__disclaimer">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className="footer__line"></div>
                <div className="footer__block">
                    <p className="footer__text">© 2021</p>

                    <ul className="footer__links">
                        <li className="footer__link"><a className="footer__text" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
                        <li className="footer__link"><a className="footer__text" href="https://github.com/yandex-praktikum" target="_blank" rel="noreferrer">Github</a></li>
                        <li className="footer__link"><a className="footer__text" href="https://www.facebook.com/yandex.practicum" target="_blank" rel="noreferrer">Facebook</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer;