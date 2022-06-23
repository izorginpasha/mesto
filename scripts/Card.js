
    
  const showInputError = (item, inputElement, errorMessage) => {// если невалидое поле
    const errorElement = document.querySelector(`#span-${inputElement.name}`); 
    inputElement.classList.add(item.inputError);
    errorElement.textContent = errorMessage;
  };
  
  const hideInputError = (item, inputElement) => {//если поле валидно
    const errorElement = document.querySelector(`#span-${inputElement.name}`); 
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
  enableValidation({// отправка обьекта
    form: '.popup__form',
    input: '.popup__text',
    inputError: 'popup__text_error',
    span: 'popup__error',
    button: '.popup__button',
    buttonInvalid: 'popup__button_invalid',
    buttonTitle: 'popup__button-title_ivalid'
  });