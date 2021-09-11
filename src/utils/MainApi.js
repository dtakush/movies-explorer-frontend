import { mainBaseUrl } from "./constants";

class MainApi {
    constructor({baseUrl, headers}) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    _fetch(path, headers) {
        return fetch(`${this.baseUrl}${path}`, headers)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Произошла ошибка: ${res.status}`);
            })
    }

    register(name, email, password) {
        return this._fetch('signup', {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({name, email, password}),
            mode: 'no-cors'
        })
    };

    login(email, password) {
        return this._fetch('signin', {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({email, password}),
            mode: 'no-cors'
        })
            .then((data) => {
                if (data.token) {
                    localStorage.setItem('jwt', data.token);
                    return data;
                }
            })
            .catch(err => console.log(err))
    };


    checkToken(jwt) {
        return this._fetch('users/me', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
            mode: 'no-cors'
        })
            .catch((err) => console.log(err))
    }
}

const mainApi = new MainApi ({
    baseUrl: 'https://api.dtakush.diploma.nomoredomains.monster/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});
    
export default mainApi;
    /* //Регистрация
    register(name, email, password) {
        return fetch(`${this.baseUrl}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
            }),
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
            console.log(res);
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
            body: JSON.stringify({email, password}),
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
            },
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
    baseUrl: 'https://dtakush.diploma.nomoredomains.monster/api',
    headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    }
}); 
    
    
export default mainApi;*/