import { mainBaseUrl } from "./constants";

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
    saveMovie(data) {
        return fetch(`${this.baseUrl}/movies`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                country: data.country || 'Нет информации',
                director: data.director || 'Нет информации',
                duration: data.duration || 0,
                year: data.year || 'Нет информации',
                description: data.description || 'Нет информации',
                image: data.image.url,
                trailer: data.trailerLink || 'Нет информации',
                nameRU: data.nameRU || 'Нет информации',
                nameEN: data.nameEN || 'Нет информации',
                thumbnail: data.image.url,
                movieId: data.id || 'Нет информации',
            }),
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
    baseUrl: 'https://api.dtakush.diploma.nomoredomains.monster',
    headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
    }
}); 
    
    
export default mainApi;