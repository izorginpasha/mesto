
export class FormValidator{ // класс создания валидности формы
  constructor(config, form){ 
    this._config = config;
    this._form = form;
    this._button = form.querySelector(this._config.button);
    this._inputList = form.querySelectorAll(this._config.input);
  }
  enableValidation(){
    
    this._form.addEventListener('submit', this._handelFormSubmit);//слушатель события нажатия кнопки
    this._form.addEventListener('input' , this._handelFormInput);// слушатель события ввода 
  
  
  }
  _formCheckValidity(){
    const isValid = this._form.checkValidity();
    return isValid;
  }
  _handelFormSubmit = (event)=>{//проверка валидности при отправке формы
    event.preventDefault();
    this._formCheckValidity();
  }
  _handelFormInput = (event)=>{//проверка валидности при вводе 
      const input = event.target;
      //Текст ошибки под каждым полем
      this._setFieldErorr(input);

      //Вкл или выкл кнопки
      this.setButtonState(this._form);

  }
  _setFieldErorr(input){//Текст ошибки под каждым полем
      this._spanAddEror(input.validationMessage, input);
      
      if(input.validationMessage){
      this._inputListAdd(input);
    }else{
      this._inputListRemove(input); 
      }

  }
  _spanAddEror(textEror, input){
    const span = this._form.querySelector(`#span-${input.name}`);
    span.textContent = textEror;

  }
  _inputListAdd(input){
    input.classList.add(this._config.popupErorClass);
  }
  _inputListRemove(input){
    input.classList.remove(this._config.popupErorClass);
  }

  setButtonState(){//Вкл или выкл кнопки
    
    
    if(this._formCheckValidity()){
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
  resetEror(){
    this._inputList.forEach((formInput) => {
    this._inputListRemove(formInput);
    this._spanAddEror("", formInput);
    console.log(formInput);
    console.log(formInput.validationMessage);
   
    

     
      });
      
      this.setButtonState();
      

  }
}

