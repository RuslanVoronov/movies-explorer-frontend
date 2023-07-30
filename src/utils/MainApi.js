class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _checkServer(res) {
        if (res.ok) {
            return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
    };

    register = ({ name, email, password }) => {
        return fetch(`${this._baseUrl}/signup`, {
            credentials: "include",
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ name, email, password })
        })
            .then(this._checkServer)
    }

    authorize = ({ email, password }) => {
        return fetch(`${this._baseUrl}/signin`, {
            credentials: "include",
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ email, password })
        })
            .then(this._checkServer)
    }

    signOut = () => {
        return fetch(`${this._baseUrl}/signout`, {
            credentials: "include",
            method: 'POST',
            headers: this._headers,
        })
            .then(this._checkServer)
    }

    getUserInfo = () => {
        return fetch(`${this._baseUrl}/users/me`, {
            credentials: "include",
            method: 'GET',
            headers: this._headers,
        })
            .then(this._checkServer)
    }

    updateUserUnfo = (data) => {
        return fetch(`${this._baseUrl}/users/me`, {
            credentials: "include",
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                email: data.email
            })
        })
            .then(this._checkServer)
    }

    getMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            credentials: "include",
            headers: this._headers,
        }).then(this._checkServer);
    }

    addMovie(movie) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            credentials: "include",
            headers: this._headers,
            body: JSON.stringify({
                country: movie.country || 'Нет данных',
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: (`https://api.nomoreparties.co/${movie.image.url}`),
                trailerLink: movie.trailerLink || 'https://www.youtube.com',
                thumbnail: (`https://api.nomoreparties.coss${movie.image.formats.thumbnail.url}`),
                movieId: movie.id,
                nameRU: movie.nameRU || 'Нет данных',
                nameEN: movie.nameEN || 'Нет данных'
            })
        }).then(this._checkServer);
    }

    deleteMovie(movieCardId) {
        return fetch(`${this._baseUrl}/movies/${movieCardId}`, {
            method: 'DELETE',
            credentials: "include",
            headers: this._headers,
        }).then(this._checkServer);
    }
};
const mainApi = new Api({
    baseUrl: 'https://api.films.nomoreparties.sbs',
    credentials: "include",
    headers: {
        'Content-Type': 'application/json'
    }
});

export default mainApi;