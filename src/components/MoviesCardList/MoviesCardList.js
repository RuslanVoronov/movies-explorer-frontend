import MoviesCard from "../MoviesCard/MoviesCard"
import './MoviesCardList.css'

function MoviesCardList({ movieCard, OnSaveMovie, onDeleteMovie, isSaved }) {


    return (
        <>
            <ul className="movies-list">
                {
                    movieCard.map((movie) => {
                        return (
                            <MoviesCard
                                key={movie._id || movie.id}
                                isSaved={isSaved}
                                movieCardInfo={movie}
                                OnSaveMovie={OnSaveMovie}
                                onDeleteMovie={onDeleteMovie}
                            />
                        )
                    })
                }
            </ul>
        </>
    );
}

export default MoviesCardList;