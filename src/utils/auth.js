import mainApi from "./MainApi";
export const BASE_URL = 'https://api.dtakush.diploma.nomoredomains.monster';

//Регистрация
export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password})
  })
  .then((res) => {
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
export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
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
          mainApi.updateHeaders();
          return res;
        }
    })  
    .catch((err) => console.log(err));
};


//Проверка токена
export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
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