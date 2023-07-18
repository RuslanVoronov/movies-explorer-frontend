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
        return fetch(`${this._baseUrl}/beatfilm-movies`, {
            method: 'GET',
            headers: this._headers,
        }).then(this._checkServer);
    }

};

const mainApi = new Api({
    baseUrl: 'http://localhost:3001',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default mainApi;