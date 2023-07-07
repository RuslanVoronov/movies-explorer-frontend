import './MoviesCard.css'

function MoviesCard(props) {
    return (
        <div className="movie-card">

            <div className="movie-card__description">
                <h2 className="movie-card__title">33 слова о дизайне</h2>
                <h3 className="movie-card__time">1ч 47м</h3>
            </div>
            <img className="movie-card__image" src='https://mobimg.b-cdn.net/v3/fetch/4f/4fc7f3e41526da3b0e6cec0afd032735.jpeg' alt='Властелин колец' />

        </div>
    );
}

export default MoviesCard;