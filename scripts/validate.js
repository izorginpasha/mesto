
    
  const showInputError = (item, inputElement, errorMessage) => {// если невалидое поле
    const errorElement = document.querySelector(`.${item.span}[id="span-${inputElement.name}"]`);
    inputElement.classList.add(item.inputError);
    errorElement.textContent = errorMessage;
  };
  
  const hideInputError = (item, inputElement) => {//если поле валидно
    const errorElement = document.querySelector(`.${item.span}[id="span-${inputElement.name}"]`);
    inputElement.classList.remove(item.inputError);
    errorElement.textContent = "";
  };
  
  const checkInputValidity = (item, inputElement) => {//проверка валидности при вводе 
    if (!inputElement.validity.valid) {
      showInputError(item, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(item, inputElement);
    }
  };
  
  const setEventListeners = (item, formElement) => {//валидация элементов формы
    const inputList = Array.from(formElement.querySelectorAll(item.input));
    const buttonElement = formElement.querySelector(item.button);

    toggleButtonState(item ,inputList, buttonElement);
    

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(item, inputElement);
        toggleButtonState(item, inputList, buttonElement);
      });
    });
  };
  
  const enableValidation = (item) => { //старт валидации всех форм
    const formList = Array.from(document.querySelectorAll(item.form)); 
   formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    
  
      setEventListeners(item,formElement);
  }); }
  const hasInvalidInput = (inputList) => {//проверка валидности при отправке формы
    return inputList.some((inputElement) => {
  
      return !inputElement.validity.valid;
    })
  }; 
  const toggleButtonState = (item ,inputList, buttonElement) => {// активатор кнопки
 
    if (hasInvalidInput(inputList)) {
      
      buttonElement.classList.add(item.buttonInvalid);
      buttonElement.setAttribute("disabled", true);

    } else {
      buttonElement.removeAttribute("disabled");
      buttonElement.classList.remove(item.buttonInvalid);
    }
  }; 
  enableValidation({// оправка обьекта
    form: '.popup__form',
    input: '.popup__text',
    inputError: 'popup__text_error',
    span: 'popup__error',
    button: '.popup__button',
    buttonInvalid: 'popup__button_invalid',
    buttonTitle: 'popup__button-title_ivalid'
  });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  //   function validation(item){
  //     const form = item;
  //     form.addEventListener('submit', _handelFormSubmit);//слушатель события нажатия кнопки
  //     form.addEventListener('input' , _handelFormInput);// слушатель события ввода 
  //   }
  //   function _handelFormSubmit(event){//проверка валидности при отправке формы
  //     event.preventDefault();
  //     const form = event.currentTarget;
  //     const isValid = form.checkValidity();
  //   }
  //   function _handelFormInput(event){
  //       const input = event.target;
  //       const form = event.currentTarget;
  //       //Текст ошибки под каждым полем
  //       _setFieldErorr(input);

  //       //Вкл или выкл кнопки
  //      _setButtonState(form);
  
  //   }
  //   function _setFieldErorr(input){
  //       const span = document.querySelector(`.popup__error[name="span-${input.name}"]`);
  //       span.textContent = input.validationMessage;
  //       if(input.validationMessage){
  //       input.classList.add('popup__text_error');}else{
  //         input.classList.remove('popup__text_error');
  //       }

  //   }
  //   function _setButtonState(form){
  //     const button = form.querySelector(".popup__button");
  //     const isValid = form.checkValidity();
  //     if(isValid){
  //       button.removeAttribute("disabled");
  //       button.classList.remove(config.buttonInvalid);
  //       button.classList.add(config.buttonTitle);
  //     }else{
  //       button.setAttribute("disabled", true);
  //       button.classList.add(config.buttonInvalid);
  //       button.classList.remove(config.buttonTitle);

  //     }

  //   }
  // const config ={
  //   buttonInvalid: 'popup__button_invalid',
  //   buttonTitle: 'popup__button-title_ivalid'
  // }
  // const enableValidation =(formElement)=>{//перебераем все формы документа
  //   const formList =Array.from(document.querySelectorAll('.popup__form'));
  //   formList.forEach((formElement) =>{
  //     validation(formElement);

  //   });
    

  // }
  // enableValidation();