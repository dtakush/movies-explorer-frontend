import React from 'react';

// Компоненты
import Subtitle from '../Subtitle/Subtitle';

function AboutProject(props) {
    return (
        <section className="about-project">
            <div className="about-project__container">
                <Subtitle
                    subtitle="О проекте"
                />
                <div className="about-project__text-container">
                    <article className="about-project__text-block">
                        <h4 className="about-project__subtitle">Дипломный проект включал 5 этапов</h4>
                        <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </article>
                    <article className="about-project__text-block">
                        <h4 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h4>
                        <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </article>
                </div>
                <div className="about-project__line-container">
                        <div className="about-project__line about-project__color-line">1 неделя</div>
                        <div className="about-project__line about-project__grey-line">4 недели</div>
                        <p className="about-project__line-text">Back-end</p>

                        <p className="about-project__line-text">Front-end</p>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;