import './MoviesCard.css'
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {

    const { pathname } = useLocation();

    return (
        <li className="movie-card">
            <div className='movie-card__container'>
                <div className="movie-card__description">
                    <h2 className="movie-card__title">33 слова о дизайне</h2>
                    <h3 className="movie-card__time">1ч 47м</h3>
                </div>
                <div className='movie-card__button'>
                    {pathname === '/saved-movies' ? (
                        <button type="button" className="movie-card__button movie-card__button_delete" />
                    ) : (
                        <button type="button" className={`movie-card__button movie-card__button_active`}
                        />
                    )}
                </div>
            </div>
            <img className="movie-card__image" src='https://mobimg.b-cdn.net/v3/fetch/4f/4fc7f3e41526da3b0e6cec0afd032735.jpeg' alt='Властелин колец' />

        </li>
    );
}

export default MoviesCard;