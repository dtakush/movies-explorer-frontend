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
                country: data.country || 'unknown',
                director: data.director || 'unknown',
                duration: data.duration || 'No data',
                year: data.year || 'unknown',
                description: data.description || 'No description',
                image: data.image,
                trailer: data.trailerLink || 'No trailer',
                thumbnail: data.image || 'No image',
                movieId: data.id || 'No data',
                nameRU: data.nameRU || 'No name',
                nameEN: data.nameEN || 'No name',
            }),
        })
        .then((res) => console.log(res))
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