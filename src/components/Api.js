class Api {
    constructor(options) {
      // тело конструктора
    }
  
    getInitialCards() {
      // ...
    }
  
    // другие методы работы с API
  }
  
  const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-46',
    headers: {
      authorization: '2c2cc31b-0d76-4800-929a-85e50fdda30e',
      'Content-Type': 'application/json'
    }
  }); 