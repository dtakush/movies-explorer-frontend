import { mainBaseUrl } from "./constants";

class MainApi {
    constructor({baseUrl, headers}) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    //Регистрация
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
            mode: "no-cors", // same-origin, cors
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
            mode: "no-cors", // same-origin, cors
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
                localStorage.setItem('token', res.token);
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
            mode: "no-cors", // same-origin, cors
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
    baseUrl: "https://dtakush.diploma.nomoredomains.monster/api",
    headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    }
});
    
    
export default mainApi;