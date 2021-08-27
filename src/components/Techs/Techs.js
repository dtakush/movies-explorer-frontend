import React from 'react';

// Компоненты
import Subtitle from '../Subtitle/Subtitle';

function Techs(props) {
    return (
        <section className="techs">
            <div className="techs__conteiner">
                <Subtitle
                        subtitle="Технологии"
                    />
                
                <h2 className="techs__title">7 технологий</h2>
                <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <div className="techs__blocks">
                    <div className="techs__block">HTML</div>
                    <div className="techs__block">CSS</div>
                    <div className="techs__block">JS</div>
                    <div className="techs__block">React</div>
                    <div className="techs__block">Git</div>
                    <div className="techs__block">Express.js</div>
                    <div className="techs__block">mongoDB</div>
                </div>
            </div>
        </section>
    )
}

export default Techs;