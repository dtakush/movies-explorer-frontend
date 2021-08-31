import React from 'react';

// Компоненты
import Subtitle from '../Subtitle/Subtitle';

function AboutMe(props) {
    return (
        <section id="me" className="about-me">
            <div className="about-me__conteiner">
                <Subtitle
                        subtitle="Студент"
                    />
                <div className="about-me__block">
                    <div className="about-me__text-block">
                        <h4 className="about-me__title">Дарья</h4>
                        <p className="about-me__subtitle">Фронтенд-разработчик, 28 лет</p>
                        <p className="about-me__text">Привет, меня зовут Даша и так вышло, что я дизайнер.
                                                        Больше чем за семь лет работы, я успела поработать
                                                        как с монстрами рынка, так и помочь в наведении
                                                        красоты и порядка начинающим брендам.</p>
                        <div className="about-me__links">
                            <a className="about-me__link" href="https://www.facebook.com/dashatakush" target="_blank" rel="noreferrer">Facebook</a>
                            <a className="about-me__link" href="https://github.com/dtakush" target="_blank" rel="noreferrer">GitHub</a>
                            <a className="about-me__link" href="https://www.instagram.com/dariatakush/" target="_blank" rel="noreferrer">Instagram</a>
                        </div>
                    </div>
                    <div className="about-me__photo"></div>
                </div>
                <h5 className="about-me__portfolio">Портфолио</h5>
                <a className="about-me__web-link"  href="https://github.com/dtakush/how-to-learn.git" target="_blank" rel="noreferrer">
                    <p className="about-me__web-link_title">Статичный сайт</p>
                    <div className="about-me__web-link_arrow"></div>
                </a>
                <a className="about-me__web-link" href="https://github.com/dtakush/mesto.git" target="_blank" rel="noreferrer">
                    <p className="about-me__web-link_title">Адаптивный сайт</p>
                    <div className="about-me__web-link_arrow"></div>
                </a>
                <a className="about-me__web-link" href="https://github.com/dtakush/react-mesto-api-full.git" target="_blank" rel="noreferrer">
                    <p className="about-me__web-link_title">Одностраничное приложение</p>
                    <div className="about-me__web-link_arrow"></div>
                </a>
            </div>
        </section>
    )
}

export default AboutMe;