export class Api {
    constructor({baseUrl,headers}) {
      this.baseUrl = baseUrl;
      this.headers = headers;
      this.authorization = this.headers.authorization;
    }
  
    getInitialCards() {
      return fetch(`${this.baseUrl}/cards`, {
          
        headers: {
          authorization: this.authorization,
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        if (res.ok) {
        return res.json();
        }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
      });
    }
    getUser(){
      return fetch(`${this.baseUrl}/users/me`, {
          
        headers: {
          authorization: this.authorization,
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        if (res.ok) {
        return res.json();
        }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
      });
    }
    setUserProfile(name,about){
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
      .then(res => {
        if (res.ok) {
        return res.json();
        }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
      });
    }
    setCard(name,link){
      console.log(name,link);
      return fetch(`${this.baseUrl}/cards`, {
        method: 'PATCH', 
        headers: {
          authorization: this.authorization,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: '`${name}`',
          link: `https://www.onetwotrip.com/ru/blog/wp-content/uploads/2016/10/caribbean-island.jpg`
        })
      })
      .then(res => {
        if (res.ok) {
        return res.json();
        }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
      });
    }


}