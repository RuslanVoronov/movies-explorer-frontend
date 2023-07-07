import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import '../Header/Header.css'
import { Link } from 'react-router-dom';

function Main() {
    return (
        <>
            <Header className="header header_type_dark">
                <Link to="/signup" className="header__menu-item">Регистрация</Link>
                <Link to="/signin" className="header__menu-item">Войти</Link>
            </Header>
            <main className="Main">
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>
            <Footer />
        </>
    );
}

export default Main;
