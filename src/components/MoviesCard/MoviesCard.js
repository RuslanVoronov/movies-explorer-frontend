import './MoviesCard.css'
import { useLocation } from 'react-router-dom';

function MoviesCard({ movieCardInfo }) {
    console.log(movieCardInfo.image)
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

    return (
        <li className="movie-card">
            <div className='movie-card__container'>
                <div className="movie-card__description">
                    <h2 className="movie-card__title">{movieCardInfo.nameRU}</h2>
                    <h3 className="movie-card__time">{duration()}</h3>
                </div>
                <div className='movie-card__button'>
                    {pathname === '/saved-movies' ? (
                        <button type="button" className="movie-card__button movie-card__button_delete" />
                    ) : (
                        <button type="button" className={`movie-card__button`}
                        />
                    )}
                </div>
            </div>
            <img className="movie-card__image" src={`https://api.nomoreparties.co/${movieCardInfo.image.url}`} alt='Властелин колец' />
        </li>
    );
}

export default MoviesCard;