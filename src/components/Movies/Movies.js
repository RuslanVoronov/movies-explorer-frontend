import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import '../Header/Header.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import './Movies.css'

function Movies({ onMenuClick, onSearchMovies, movieCard, onSaveMovie }) {
    return (
        <>
            <Header className="header" onMenuClick={onMenuClick}>
            </Header>
            <section className="movies">
                <SearchForm onSearchMovies={onSearchMovies} />
                <MoviesCardList movieCard={movieCard} OnSaveMovie={onSaveMovie} />
                <button className="movies__button" type="button">Ещё</button>
            </section>
            <Footer />
        </>
    );
}

export default Movies;