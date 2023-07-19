import './MoviesCard.css'
import { useLocation } from 'react-router-dom';

function MoviesCard({ movieCardInfo, OnSaveMovie, onDeleteMovie }) {
    const { pathname } = useLocation();

    function duration() {
        if (movieCardInfo.duration > 60) {
            return (movieCardInfo.duration / 60 | 0) + "ч " + movieCardInfo.duration % 60 + "м"
        }
        if (movieCardInfo.duration === 60) {
            return (movieCardInfo.duration / 60) + "ч"
        } else {
            return movieCardInfo.duration + "м"
        }
    }

    function handleCardSave() {
        OnSaveMovie(movieCardInfo)
    }

    function handleDeleteCard() {
        onDeleteMovie(movieCardInfo)
    }

    return (
        <li className="movie-card">
            <div className='movie-card__container'>
                <div className="movie-card__description">
                    <h2 className="movie-card__title">{movieCardInfo.nameRU}</h2>
                    <h3 className="movie-card__time">{duration()}</h3>
                </div>
                <div className='movie-card__button'>
                    {pathname === '/saved-movies' ? (
                        <button type="button" onClick={handleDeleteCard} className="movie-card__button movie-card__button_delete" />
                    ) : (
                        <button type="button" onClick={handleCardSave} className={`movie-card__button`}
                        />
                    )}
                </div>
            </div>
            {/* `https://api.nomoreparties.co${movieCardInfo.image.url}` */}
            <img className="movie-card__image"
                src={pathname === '/movies' ? `https://api.nomoreparties.co${movieCardInfo.image.url}` : movieCardInfo.image}
                alt={movieCardInfo.nameRU} />
        </li>
    );
}

export default MoviesCard;