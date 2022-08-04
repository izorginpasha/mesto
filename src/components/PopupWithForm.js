import { Popup } from "./Popup.js";


export class PopupWithForm extends Popup{
    constructor(popupSelector, submitForm){// принимает селектор класса popup
        super(popupSelector);
        this._submitForm = submitForm;
        this._buttonForm = this._popup.querySelector('.popup__button');
        this._formPopup = this._popup.querySelector('.popup__form');
        this._submitHandler = this._submitHandler.bind(this);
        this._inputList = this._popup.querySelectorAll('.popup__text');
        this.buttonSpan =  this._buttonForm.querySelector('.popup__button-title');
    };
    _getInputValues(){//собирает данные полеи
        this.inputValue ={};
        this._inputList.forEach(item => {
            this.inputValue[item.id] = item.value ; 
        });

        return this.inputValue;
    }
        
    setEventListeners(){// переопределяет родительскии метод добовляя сабмит
        super.setEventListeners();
        this._formPopup.addEventListener('submit',this._submitHandler);
    }

    _submitHandler(evt) {
        evt.preventDefault();
       
        this.buttonSpan.textContent = "Сохраниение...";
        this._submitForm( this._getInputValues());  
    }
    close(evt){// переопределяет родительскии метод добовляя ресет
        this._formPopup.reset();
        super.close();
    }
}