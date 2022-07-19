import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup{
    constructor(popupSelector, submitForm){// принимает селектор класса popup
        super(popupSelector);
        this._submitForm = submitForm;
        this._buttonForm = this._popup.querySelector('.popup__button');
        this._formPopup = this._popup.querySelector('.popup__form');
        this._setFormHandler = this._formPopup.addEventListener('submit',this._submitHandler.bind(this))
    }
    _getInputValues(){//собирает данные полеи
        return this._popup.querySelectorAll('.popup__text');
    }
    setEventListeners(){// переопределяет родительскии метод добовляя сабмит
        super.setEventListeners();
        this._setFormHandler;
    }
    _submitHandler(evt) {
        evt.preventDefault();
        this._submitForm();
        this.close();
    }
    close(){// переопределяет родительскии метод добовляя ресет
        this._formPopup.reset();
        super.close();
    }
}