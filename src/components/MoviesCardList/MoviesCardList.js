import MoviesCard from "../MoviesCard/MoviesCard"
import './MoviesCardList.css'
import { useState, useEffect } from 'react';

function MoviesCardList({ movieCard, OnSaveMovie, onDeleteMovie, isSaved, isAllMoviesShown, onShowMoreButton }) {

    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // const [moreCards, setMoreCards] = useState(0);
    // const [showMovies, setShowMovies] = useState([])

    // useEffect(() => {
    //     window.addEventListener('resize', checkWindowWidth)
    //     // handleResize()
    // }, [windowWidth])

    // function checkWindowWidth() {
    //     setWindowWidth(window.innerWidth)
    //     window.removeEventListener('resize', checkWindowWidth)
    // }

    // function handleResize() {
    //     if (movieCard === null) {
    //         return
    //     }
    //     if (windowWidth > 768) {
    //         setShowMovies(movieCard.slice(0, 12))
    //         setMoreCards(3)
    //     } else if (windowWidth <= 768) {
    //         setShowMovies(movieCard.slice(0, 8))
    //         setMoreCards(2)
    //     } else if (windowWidth <= 480) {
    //         setShowMovies(movieCard.slice(0, 5))
    //         setMoreCards(2)
    //         //   setIsAllMoviesShown(foundMovies.length > movieCard.length)
    //     }
    // }

    // function handleShowMore() {
    //     setShowMovies(movieCard.slice(0, movieCard.length + moreCards))
    //     // setIsAllMoviesShown(foundMovies.length > movieCard.length)
    // }


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
            {(isAllMoviesShown) && < button className={"movies__button"} onClick={onShowMoreButton} type="button">Ещё</button >}
        </>
    );
}

export default MoviesCardList;