import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import '../Header/Header.css'

function Main({ handleMenuClick, loggedIn }) {
    return (
        <>
            <Header onMenuClick={handleMenuClick} loggedIn={loggedIn}>
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
