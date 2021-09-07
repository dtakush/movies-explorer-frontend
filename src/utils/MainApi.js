import { mainBaseUrl } from "./constants";

class MainApi {
    constructor({baseUrl, headers}) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    //сохранение фильма
    saveMovie(movie) {
        return fetch(`${this.baseUrl}/movies`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: movie.image,
                trailer: movie.trailer,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
                thumbnail: movie.thumbnail,
                movieId: movie.movieId,
            })
          })
          .then(this._checkResponse)
    }

    //удаление фильма
    deleteMovie(id) {
        return fetch(`${this.baseUrl}/movies/${id}`, {
          method: 'DELETE',
          headers: this.headers
        })
        .then(this._checkResponse)
    }

    _checkResponse(res){
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }  
}

const mainApi = new MainApi({
    baseUrl: mainBaseUrl,
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    }
});


export default mainApi;