import MoviesCard from "../MoviesCard/MoviesCard"
import './MoviesCardList.css'

function MoviesCardList({ movieCard, OnSaveMovie, onDeleteMovie }) {


    return (
        <>
            <ul className="movies-list">
                {
                    movieCard.map((movie) => {
                        return (
                            <MoviesCard
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