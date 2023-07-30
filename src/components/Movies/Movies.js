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
        localStorage.setItem('checkbox', checkbox)
        localStorage.setItem('searchedMovieName', movieName)
        setMovieCard(foundMovies)
        // onResize()
    }
console.log(movieCard)
    function handleCheckbox(checkbox) {
        const movies = JSON.parse(localStorage.getItem('searchedMovies'));
        localStorage.setItem('checkbox', checkbox)
        const foundMovies = checkbox ? movies.filter((item) => item.duration <= 40) : movies
        localStorage.setItem('foundMovies', JSON.stringify(foundMovies))
        setMovieCard(foundMovies);
    }

    const movieName = localStorage.getItem('searchedMovieName') ?? '';
    const checkbox = JSON.parse(localStorage.getItem('checkbox')) ?? false;

    const defaultValues = { movieName, checkbox }
    return (
        <>
            <Header className="header" onMenuClick={onMenuClick}>
            </Header>
            <section className="movies">
                <SearchForm
                    onSearchMovie={handleSearchMovie}
                    onInfoTooltip={onInfoTooltip}
                    onCheckBox={handleCheckbox}
                    defaultValues={defaultValues} />
                {!isLoading ? (
                    <Preloader />
                ) : (
                    <>
                        <MoviesCardList
                            movieCard={movieCard}
                            OnSaveMovie={onSaveMovie}
                            onDeleteMovie={onDeleteMovie}
                            isSaved={isSaved}
                            isAllMoviesShown={isAllMoviesShown}
                            onShowMoreButton={onShowMoreButton}
                        />
                    </>
                )
                }
            </section>
            <Footer />
        </>
    );
}

export default Movies;