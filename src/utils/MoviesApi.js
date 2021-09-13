import { MOVIES_BASE_URL } from './constants';

class MoviesApi {
    constructor({baseUrl, headers}) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    //Запрос карточек с сервера
    getInitialCards() {
        return fetch(`${this.baseUrl}`, {
          method: 'GET',
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

const moviesApi = new MoviesApi({
    baseUrl: MOVIES_BASE_URL,
    headers: {
      'Accept': 'application/json',
      // 'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    }
});


export default moviesApi;