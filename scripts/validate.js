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
        //this._setCustomError(input);


        //Текст ошибки под каждым полем
        this._setFieldErorr(input);

        //Вкл или выкл кнопки
        this._setButtonState(form);
  
    }
    // _setCustomError(input){
    //     const validity = input.validity;
    //     input.setCustomValidity("");
    //     if (validity.tooLong || validity.tooShort){
    //         input.setCustomValidity('Срока слишком короткая (или слишком длинная)');

    //     }
    //     else if(validity.typeMismatch){
    //         input.setCustomValidity('Введите ссылку, пожалуиста');
    //     }
    // }
    _setFieldErorr(input){
        const span = document.querySelector(`.popup__error[name="span-${input.name}"]`);
        //console.log(`span-${input.name}`);
        //const span = document.getElementByName(`span-${input.name}`);
        span.textContent = input.validationMessage;

    }
    _setButtonState(form){
      const button = form.querySelector(this._config.button);
      const isValid = form.checkValidity();
      if(isValid){
        button.removeAttribute("disabled");
        button.classList.remove(this._config.buttonInvalid);
        button.classList.add(this._config.buttonValid);
      }else{
        button.setAttribute("disabled", true);
        button.classList.remove(this._config.buttonValid);
        button.classList.add(this._config.buttonInvalid);

      }

    }
  }
  const validProfileConfig ={
    form: '.popup__form[id="popupFormProfile"]',
    button: '.popup__button[id="buttonSave"]' ,
    buttonInvalid: 'popup__button_invalid',
    buttonValid: 'popup__button_valid'
  }
  const validNewMestoConfig ={
    form: '.popup__form[id="popupFormNewMesto"]',
    button: '.popup__button[id="buttonNew"]' ,
    buttonInvalid: 'popup__button_invalid',
    buttonValid: 'popup__button_valid'
  }
  const form1 = new formValidation(validNewMestoConfig);// создание экземпляра класса валидности, для формы редактирвания профиля
  form1.enableValidation();//включение валидации