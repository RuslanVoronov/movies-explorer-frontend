import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import '../Header/Header.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import './Movies.css'
import Preloader from "../Preloader/Preloader";

function Movies({ onMenuClick, onSearchMovie, movieCard, onSaveMovie, isSaved, onDeleteMovie, onShowMoreButton, isLoading }) {
    return (
        <>
            <Header className="header" onMenuClick={onMenuClick}>
            </Header>
            <section className="movies">
                <SearchForm onSearchMovie={onSearchMovie} />
                {isLoading ? (
                    <Preloader />
                ) : (
                    <>
                        <MoviesCardList movieCard={movieCard} OnSaveMovie={onSaveMovie} onDeleteMovie={onDeleteMovie} isSaved={isSaved} />
                        <button className="movies__button" onClick={onShowMoreButton} type="button">Ещё</button>
                    </>
                )
                }
            </section>
            <Footer />
        </>
    );
}

export default Movies;