import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import '../Header/Header.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import '../Movies/Movies.css'

function SavedMovies() {
    return (
        <>
            <Header className="header header_type_dark">
            </Header>
            <section className="movies">
                <SearchForm />
                <MoviesCardList />
            </section>
            <Footer />
        </>
    );
}

export default SavedMovies;
