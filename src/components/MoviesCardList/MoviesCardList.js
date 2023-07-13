import MoviesCard from "../MoviesCard/MoviesCard"
import './MoviesCardList.css'

function MoviesCardList() {
    return (
        <>
            <ul className="movies-list">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </ul>
        </>
    );
}

export default MoviesCardList;