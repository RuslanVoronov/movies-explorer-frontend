import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import '../Header/Header.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import mainApi from '../../utils/MainApi';
import '../Movies/Movies.css'
import { useEffect } from "react";


function SavedMovies({ onMenuClick, onDeleteMovie, isSaved, onInfoTooltip,
    onResize, savedMovies, setSavedMovies, setIsLoading, onShowMoreButton, isLoading }) {

    useEffect(() => {
        mainApi.getMovies()
            .then((res) => {
                setSavedMovies(res)
                localStorage.setItem('savedMovies', JSON.stringify(res))
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`)
            })
    }, [])

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
        const searchedMovies = JSON.parse(localStorage.getItem('foundSavedMovies')) ?? movies;
        const foundMovies = checkbox ? savedMovies.filter((item) => item.duration <= 40) : searchedMovies
        if (foundMovies.length === 0) {
            onInfoTooltip("Ничего не найдено")
            return
        }
        setSavedMovies(foundMovies);
        onResize()
    }

    const defaultValues = { movieName: '', checkbox: false }
    return (
        <>
            <Header className="header" onMenuClick={onMenuClick}>
            </Header>
            <section className="movies">
                <SearchForm
                    onSearchMovie={handleSearchSavedMovie}
                    onInfoTooltip={onInfoTooltip}
                    onCheckBox={handleCheckbox}
                    defaultValues={defaultValues}
                />
                <MoviesCardList movieCard={savedMovies} onDeleteMovie={onDeleteMovie} isSaved={isSaved} onShowMoreButton={onShowMoreButton}
                    foundMovies={movies} isLoading={isLoading}
                />
            </section>
            <Footer />
        </>
    );
}

export default SavedMovies;