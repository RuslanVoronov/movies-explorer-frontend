import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import '../Header/Header.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import { Link } from 'react-router-dom';

function Main() {
    return (
        <>
            <Header className="header header_type_dark">
            </Header>
            <main className="movies">
                <SearchForm  />
                <MoviesCardList />
            </main>
            <Footer />
        </>
    );
}

export default Main;
