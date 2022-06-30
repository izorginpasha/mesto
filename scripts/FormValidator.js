
export class FormValidator{ // класс создания валидности формы
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
  }
  _handelFormInput = (event)=>{//проверка валидности при вводе 
      const input = event.target;
      const form = event.currentTarget;
      //Текст ошибки под каждым полем
      this._setFieldErorr(input);

      //Вкл или выкл кнопки
      this.setButtonState(form);

  }
  _setFieldErorr(input){//Текст ошибки под каждым полем
      const span = document.querySelector(`#span-${input.name}`);
      span.textContent = input.validationMessage;
      if(input.validationMessage){
      input.classList.add('popup__text_error');}else{
        input.classList.remove('popup__text_error');
      }

  }
  setButtonState(form){//Вкл или выкл кнопки
    const button = form.querySelector(this._config.button);
    const isValid = form.checkValidity();
    if(isValid){
      button.removeAttribute("disabled");
      button.classList.remove(this._config.buttonInvalid);
      button.classList.add(this._config.buttonValid);
      button.classList.add(this._config.buttonTitle);
    }else{
      button.setAttribute("disabled", true);
      button.classList.remove(this._config.buttonValid);
      button.classList.add(this._config.buttonInvalid);
      button.classList.remove(this._config.buttonTitle);

    }

  }
}

