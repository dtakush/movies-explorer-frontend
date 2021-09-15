import { MAIL_BASE_URL, MOVIE_INFO_URL } from "./constants";

class MainApi {
    constructor({baseUrl, headers}) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    //Запрос информации о пользователе    
    getUserInfo(jwt) {
        return fetch(`${this.baseUrl}/users/me`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${jwt}`,
            'Content-Type': 'application/json'
            },
        })
        .then(this._checkResponse)
    }

    //Изменение информации о пользователе
    setUserInfo(name, email, jwt) {
        return fetch(`${this.baseUrl}/users/me`, {
          method: 'PATCH',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${jwt}`,
            'Content-Type': 'application/json'
            },
          body: JSON.stringify({
            name: name,
            email: email
          })
        })
        .then(this._checkResponse)
    }

    //сохранение фильма
    saveMovie(movie, jwt) {
        return fetch(`${this.baseUrl}/movies`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${jwt}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                movieId: movie.id || 0,
                nameRU: movie.nameRU || 'no name',
                nameEN: movie.nameEN || 'no english name',
                director: movie.director || 'no director',
                description: movie.description || 'no description',
                trailer: movie.trailerLink || 'https://www.youtube.com/channel/UCng_jFvloTT9v7JlSwi_qSQ',
                country: movie.country || 'no country',
                duration: movie.duration || 0,
                year: movie.year || 'no year',
                image: `${MOVIE_INFO_URL}${movie.image.url}`,
                thumbnail: `${MOVIE_INFO_URL}${movie.image.formats.thumbnail.url}`,
            }),
        })
        .then(this._checkResponse);
    }

    //запрос сохраненных фильмов
    getSavedMovies(jwt) {
        return fetch(`${this.baseUrl}/movies`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${jwt}`,
            'Content-Type': 'application/json'
        },
          credentials: 'include',
        })
        .then(this._checkResponse);
    }

    //удаление фильма
    deleteCard(movie, jwt) {
        return fetch(`${this.baseUrl}/movies/${movie._id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${jwt}`,
            'Content-Type': 'application/json'
        },
        })
        .then(this._checkResponse);
    }

    _checkResponse(res){
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }  
}

const mainApi = new MainApi({
    baseUrl: MAIL_BASE_URL,
    headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
    }
}); 
    
    
export default mainApi;