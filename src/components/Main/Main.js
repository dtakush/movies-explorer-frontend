import React from 'react';

// Компоненты
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';

function Main(props) {
    return (
        <>
            <Header
            loggedIn={props.loggedIn}
            />
            
            <Promo />
            <NavTab />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Footer />
        </>    
    )
}

export default Main;