
export class FormValidator{ // класс создания валидности формы
  constructor(config, form){ 
    this._config = config;
    this._form = form;
    this._button = form.querySelector(this._config.button);
    this._spanList = form.querySelectorAll(this._config.span);
  }
  enableValidation(){
    
    this._form.addEventListener('submit', this._handelFormSubmit);//слушатель события нажатия кнопки
    this._form.addEventListener('input' , this._handelFormInput);// слушатель события ввода 
    console.log(this._inputList);
  
  }
  _formCheckValidity(form){
    const isValid = form.checkValidity();
    return isValid;
  }
  _handelFormSubmit = (event)=>{//проверка валидности при отправке формы
    event.preventDefault();
    this._formCheckValidity(this._form);
  }
  _handelFormInput = (event)=>{//проверка валидности при вводе 
      const input = event.target;
      //Текст ошибки под каждым полем
      this._setFieldErorr(input);

      //Вкл или выкл кнопки
      this.setButtonState(this._form);

  }
  _setFieldErorr(input){//Текст ошибки под каждым полем
      const span = this._form.querySelector(`#span-${input.name}`);
      span.textContent = input.validationMessage;
      if(input.validationMessage){
      input.classList.add(this._config.popupErorClass);}else{
        input.classList.remove(this._config.popupErorClass);
      }

  }
  setButtonState(form){//Вкл или выкл кнопки
    
    
    if(this._formCheckValidity(form)){
      this._button.removeAttribute("disabled");
      this._button.classList.remove(this._config.buttonInvalid);
      this._button.classList.add(this._config.buttonValid);
      this._button.classList.add(this._config.buttonTitle);
    }else{
      this._button.setAttribute("disabled", true);
      this._button.classList.remove(this._config.buttonValid);
      this._button.classList.add(this._config.buttonInvalid);
      this._button.classList.remove(this._config.buttonTitle);

    }
    

  }
  resetEror(form){
    this._spanList.forEach((formSpan) => {
      formSpan.textContent="";
      });
      
      this.setButtonState(this._form);

  }
}

