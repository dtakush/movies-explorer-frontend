export const BASE_URL = 'https://api.dtakush.diploma.nomoredomains.monster';

//Регистрация
export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "name": name,
      "email": email,
      "password": password})
  })
  .then((res) => {
    console.log(res);
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
  .then((data) => {
    console.log(data);
    return data;
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
    body: JSON.stringify({
      "email": email,
      "password": password})
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
    .then((data) => {
      console.log(data);
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        return data;
      }
      return;
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