import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import '../Header/Header.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import './Movies.css'
import Preloader from "../Preloader/Preloader";

function Movies({ onMenuClick, onSaveMovie, isSaved, onDeleteMovie,
    onShowMoreButton, isLoading, onInfoTooltip, isAllMoviesShown, onResize, movieCard, setMovieCard }) {
    // Форма поиска
    function handleSearchMovie(movieName, checkbox) {
        const movies = JSON.parse(localStorage.getItem('movies'))
        const searchedMovies = movies.filter((item) => item.nameRU.toLowerCase().includes(movieName.toLowerCase()))
        const foundMovies = checkbox ? searchedMovies.filter((item) => item.duration <= 40) : searchedMovies
        if (foundMovies.length === 0) {
            onInfoTooltip("Ничего не найдено")
            return
        }
        localStorage.setItem('foundMovies', JSON.stringify(foundMovies))
        localStorage.setItem('searchedMovies', JSON.stringify(searchedMovies))
        setMovieCard(foundMovies)
        onResize()
    }
    function handleCheckbox(checkbox) {
        const movies = JSON.parse(localStorage.getItem('searchedMovies'));
        const foundMovies = checkbox ? movies.filter((item) => item.duration <= 40) : movies
        localStorage.setItem('checkbox', checkbox)
        setMovieCard(foundMovies);
    }

    return (
        <>
            <Header className="header" onMenuClick={onMenuClick}>
            </Header>
            <section className="movies">
                <SearchForm onSearchMovie={handleSearchMovie} onInfoTooltip={onInfoTooltip} onCheckBox={handleCheckbox} />
                {!isLoading ? (
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