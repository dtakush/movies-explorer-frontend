import React from 'react';

function NavTab(props) {
    return (
        //eslint-disable-next-line
        <section className="nav-tab">  
            <a href="#project" className="nav-tab__link" rel="noreferrer">О проекте</a>
            <a href="#techs" className="nav-tab__link" rel="noreferrer">Технологии</a>
            <a href="#me" className="nav-tab__link" rel="noreferrer">Студент</a>
        </section>
    )
}

export default NavTab;