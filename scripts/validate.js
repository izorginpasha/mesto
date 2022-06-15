
    
    function validation(item){
      const form = item;
      form.addEventListener('submit', _handelFormSubmit);//слушатель события нажатия кнопки
      form.addEventListener('input' , _handelFormInput);// слушатель события ввода 
    }
    function _handelFormSubmit(event){//проверка валидности при отправке формы
      event.preventDefault();
      const form = event.currentTarget;
      const isValid = form.checkValidity();
    }
    function _handelFormInput(event){//проверка валидности при вводе 
        const input = event.target;
        const form = event.currentTarget;
        //Текст ошибки под каждым полем
        _setFieldErorr(input);

        //Вкл или выкл кнопки
       _setButtonState(form);
  
    }
    function _setFieldErorr(input){
        const span = document.querySelector(`.popup__error[name="span-${input.name}"]`);
        span.textContent = input.validationMessage;
        if(input.validationMessage){
        input.classList.add('popup__text_error');}else{
          input.classList.remove('popup__text_error');
        }

    }
    function _setButtonState(form){
      const button = form.querySelector(".popup__button");
      const isValid = form.checkValidity();
      if(isValid){
        button.removeAttribute("disabled");
        button.classList.remove(config.buttonInvalid);
        button.classList.add(config.buttonValid);
        button.classList.add(config.buttonTitle);
      }else{
        button.setAttribute("disabled", true);
        button.classList.remove(config.buttonValid);
        button.classList.add(config.buttonInvalid);
        button.classList.remove(config.buttonTitle);

      }

    }
  const config ={
    buttonInvalid: 'popup__button_invalid',
    buttonValid: 'popup__button_valid',
    buttonTitle: 'popup__button-title_ivalid'
  }
  const enableValidation =(formElement)=>{//перебераем все формы документа
    const formList =Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) =>{
      validation(formElement);
      console.log(formElement);

    });
    

  }
  enableValidation();