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
            about: data.about
          })
        })
        .then(this._checkResponse)
    }

    //запрос сохраненных фильмов
    getSavedMovies() {
        return fetch(`${this.baseUrl}/movies`, {
            method: 'GET',
            headers: this.headers,
        })
    };

    //сохранение фильма
    saveMovie(movie) {
        return fetch(`${this.baseUrl}/movies`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                country: movie.country,
                description: movie.description,
                director: movie.director,
                duration: movie.duration,
                movieId: movie.movieId,
                image: movie.image,
                nameEN: movie.nameEN,
                nameRU: movie.nameRU,
                trailerLink: movie.trailerLink,
                year: movie.year,
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

    /* updateHeaders() {
        this.headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        }
    } */

    //Регистрация
    register (name, email, password) {
        return fetch(`${this.baseUrl}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
            })
        })
        .then((res) => {
            console.log(res);
            if(res.status === 200) {
                return res.json();
            }
            if(res.status === 409) {
                console.log("При регистрации указан email, который уже существует");
            }
            if(res.status === 400) {
                console.log("Переданы некорректные данные при создании пользователя");
            }
        })
        .then((res) => {
            return res;
        })
        .catch((err) => console.log(err));
    };
  
    //Авторизация
    authorize (email, password) {
        return fetch(`${this.baseUrl}/signin`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({email, password})
            })
        .then((res) => {
            if(res.status === 200) {
                return res.json();
            }
            if(res.status === 400) {
                console.log("Не передано одно из полей");
            }
            if(res.status === 401) {
                console.log("Пользователь с email не найден");
            }
        })
        .then((res) => {
            if(res.token) {
                localStorage.setItem('jwt', res.token);
                return res;
            }
        })  
        .catch((err) => console.log(err));
    };
  
  
    //Проверка токена
    checkToken (token) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
        .then((res) => {
            if(res.status === 200) {
                return res.json();
            }
            if(res.status === 400) {
                console.log("Токен не передан или передан не в том формате");
            }
            if(res.status === 401) {
                console.log("Переданный токен некорректен");
            }
            })
        .then((data) => {
            return data;
            })
        .catch((err) => console.log(err));
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