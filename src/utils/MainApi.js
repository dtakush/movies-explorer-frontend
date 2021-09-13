import { MAIL_BASE_URL, MOVIE_INFO_URL } from "./constants";

class MainApi {
    constructor({baseUrl, headers}) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    //Запрос информации о пользователе    
    getUserInfo() {
        return fetch(`${this.baseUrl}/users/me`, {
          method: 'GET',
          headers: this.headers
        })
        .then(this._checkResponse)
    }

    //Изменение информации о пользователе
    setUserInfo(data) {
        return fetch(`${this.baseUrl}/users/me`, {
          method: 'PATCH',
          headers: this.headers,
          body: JSON.stringify({
            name: data.name,
            email: data.email
          })
        })
        .then(this._checkResponse)
    }

    //сохранение фильма
    saveMovie(movie) {
        return fetch(`${this.baseUrl}/movies`, {
            method: 'POST',
            headers: this.headers,
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
    getSavedMovies() {
        return fetch(`${this.baseUrl}/movies`, {
          method: 'GET',
          headers: this.headers,
          credentials: 'include',
        })
        .then(this._checkResponse);
    }

    //удаление фильма
    deleteCard(movie) {
        return fetch(`${this.baseUrl}/movies/${movie._id}`, {
          method: 'DELETE',
          headers: this.headers
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