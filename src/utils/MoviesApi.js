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

    getMovies() {
        return fetch(`${this._baseUrl}`, {
            method: 'GET',
            headers: this._headers,
        }).then(this._checkServer);
    }

};

const moviesApi = new Api({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default moviesApi;