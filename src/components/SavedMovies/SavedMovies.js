import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import '../Header/Header.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import '../Movies/Movies.css'


function SavedMovies({ onMenuClick, onDeleteMovie, isSaved, onInfoTooltip, onResize, savedMovies, setSavedMovies }) {

    const movies = JSON.parse(localStorage.getItem('savedMovies'))

    function handleSearchSavedMovie(movieName, checkbox) {
        const searchedMovies = movies.filter((item) => item.nameRU.toLowerCase().includes(movieName.toLowerCase()))
        if (searchedMovies.length === 0) {
            onInfoTooltip("Ничего не найдено")
            return
        }
        localStorage.setItem('foundSavedMovies', JSON.stringify(searchedMovies))
        setSavedMovies(searchedMovies)
        onResize()
    }

    function handleCheckbox(checkbox) {
        const searchedMovies = JSON.parse(localStorage.getItem('foundSavedMovies'));
        const foundMovies = checkbox ? savedMovies.filter((item) => item.duration <= 40) : searchedMovies
        setSavedMovies(foundMovies);
    }

    return (
        <>
            <Header className="header" onMenuClick={onMenuClick}>
            </Header>
            <section className="movies">
                <SearchForm onSearchMovie={handleSearchSavedMovie} onInfoTooltip={onInfoTooltip} onCheckBox={handleCheckbox} />
                <MoviesCardList movieCard={savedMovies} onDeleteMovie={onDeleteMovie} isSaved={isSaved} />
            </section>
            <Footer />
        </>
    );
}

export default SavedMovies;