class formValidation{ // класс создания валидности формы
    constructor(config){ 
      this._config = config;
    }
    enableValidation(){
      const form = document.querySelector(this._config.form);
      form.addEventListener('submit', this._handelFormSubmit);//слушатель события нажатия кнопки
      form.addEventListener('input' , this._handelFormInput);// слушатель события ввода 
    
    }
    _handelFormSubmit = (event)=>{//проверка валидности при отправке формы
      event.preventDefault();
      const form = event.currentTarget;
      const isValid = form.checkValidity();
  
      if (isValid){
        alert ('Форма валидна!');
        form.reset();
      }else {
        alert ('Форма не велидна');
      }
    }
    _handelFormInput = (event)=>{//проверка валидности при вводе 
        const input = event.target;
        const form = event.currentTarget;

        //Установка текста ошибок
        this._setCustomError(input);


        //Текст ошибки под каждым полем
        this._setFieldErorr(input);

        //Вкл или выкл кнопки
        this._setButtonState(form);
  
    }
    _setCustomError(input){
        const validity = input.validity;
        input.setCustomValidity("");
        if (validity.tooLong || validity.tooShort){
            input.setCustomValidity('Срока слишком короткая (или слишком длинная)');

        }
        else if(validity.typeMismatch){
            input.setCustomValidity('Введите ссылку, пожалуиста');
        }
    }
    _setFieldErorr(input){
        const target = document.querySelector('#span').content;
        const elementSpan = target.querySelector('.popup__error').cloneNode(true);
        elementSpan.textContent = input.validationMessage;
        input.insertAdjacentElement('beforeEnd', elementSpan);

    }
  }
  const validProfileConfig ={
    form: '.popup__form[id="popupFormProfile"]',
    button: '.popup__button' ,
    buttonInvalid: '.popup__button_invalid',
  }
  const form1 = new formValidation(validProfileConfig);// создание экземпляра класса валидности, для формы редактирвания профиля
  form1.enableValidation();//включение валидации