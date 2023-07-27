import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import '../Header/Header.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import './Movies.css'
import Preloader from "../Preloader/Preloader";

function Movies({ onMenuClick, onSearchMovie, movieCard, onSaveMovie, isSaved, onDeleteMovie, onShowMoreButton, isLoading, onInfoTooltip, isAllMoviesShown }) {
    return (
        <>
            <Header className="header" onMenuClick={onMenuClick}>
            </Header>
            <section className="movies">
                <SearchForm onSearchMovie={onSearchMovie} onInfoTooltip={onInfoTooltip} />
                {isLoading ? (
                    <Preloader />
                ) : (
                    <>
                        <MoviesCardList movieCard={movieCard} OnSaveMovie={onSaveMovie} onDeleteMovie={onDeleteMovie} isSaved={isSaved} />
                        <button className={`${isAllMoviesShown ? "movies__button" : "movies__button movies__button_hidden"}`} onClick={onShowMoreButton} type="button">Ещё</button>
                    </>
                )
                }
            </section>
            <Footer />
        </>
    );
}

export default Movies;