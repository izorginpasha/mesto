export class Api {
    constructor({baseUrl,headers}) {
      this.baseUrl = baseUrl;
      this.headers = headers;
      this.authorization = this.headers.authorization;
    }
    _checkResponse(res) {
      
        if (res.ok) {
        return res.json();
        }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
      
  }
    getInitialCards() {// загрузка карточек
      return fetch(`${this.baseUrl}/cards`, {
          
        headers: {
          authorization: this.authorization,
          'Content-Type': 'application/json'
        }
      })
      .then(this._checkResponse)
    }
    getUser(){//получение данных профиля
      return fetch(`${this.baseUrl}/users/me`, {
          
        headers: {
          authorization: this.authorization,
          'Content-Type': 'application/json'
        }
      })
      .then(this._checkResponse)
    }
    setUserProfile(name,about){ // передача данных профиля
      return fetch(`${this.baseUrl}/users/me`, {
        method: 'PATCH', 
        headers: {
          authorization: this.authorization,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: `${name}`,
          about: `${about}`
        })
      })
      .then(this._checkResponse)
    }
    setCard(name,link){ // запрос на добавление карточки
      return fetch(`${this.baseUrl}/cards`, {
        method: 'POST', 
        headers: {
          authorization: this.authorization,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: `${name}`,
          link: `${link}`
        })
      })
      .then(this._checkResponse)
      
    }
    delCard(idCard){ //запос на удаление карточки
      return fetch(`${this.baseUrl}/cards/${idCard}`, {
        method: 'DELETE', 
        headers: {
          authorization: this.authorization,
          'Content-Type': 'application/json'
        },
      })
      .then(this._checkResponse)
      
    }
    like(idCard){ // запрос на добавление лайка
      return fetch(`${this.baseUrl}/cards/${idCard}/likes`, {
        method: 'PUT', 
        headers: {
          authorization: this.authorization,
          'Content-Type': 'application/json'
        },
      })
      .then(this._checkResponse)

    }
    delLike(idCard){ // запрос на добавление лайка
      return fetch(`${this.baseUrl}/cards/${idCard}/likes`, {
        method: 'DELETE', 
        headers: {
          authorization: this.authorization,
          'Content-Type': 'application/json'
        },
      })
      .then(this._checkResponse)


    }
    setUserAvatar(avatar){ // передача данных аватара
      return fetch(`${this.baseUrl}/users/me/avatar`, {
        method: 'PATCH', 
        headers: {
          authorization: this.authorization,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          avatar: `${avatar}`
        })
      })
      .then(this._checkResponse)
    }


}