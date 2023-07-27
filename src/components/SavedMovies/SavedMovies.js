import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import '../Header/Header.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import '../Movies/Movies.css'

function SavedMovies({ onMenuClick, movieCard, onDeleteMovie, isSaved, onSearchMovie, onInfoTooltip }) {
    return (
        <>
            <Header className="header" onMenuClick={onMenuClick}>
            </Header>
            <section className="movies">
                <SearchForm onSearchMovie={onSearchMovie} onInfoTooltip={onInfoTooltip}/>
                <MoviesCardList movieCard={movieCard} onDeleteMovie={onDeleteMovie} isSaved={isSaved} />
            </section>
            <Footer />
        </>
    );
}

export default SavedMovies;
