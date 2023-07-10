import MoviesCard from "../MoviesCard/MoviesCard"
import './MoviesCardList.css'
function MoviesCardList(props) {
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