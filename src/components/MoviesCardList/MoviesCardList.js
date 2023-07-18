import MoviesCard from "../MoviesCard/MoviesCard"
import './MoviesCardList.css'

function MoviesCardList({ movieCard, OnSaveMovies }) {


    return (
        <>
            <ul className="movies-list">
                {
                    movieCard.map((movie) => {
                        return (
                            <MoviesCard
                                movieCardInfo={movie}
                            />
                        )
                    })
                }
            </ul>
            <button className="movies-list__button" type="button">Ещё</button>
        </>
    );
}

export default MoviesCardList;