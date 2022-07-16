import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup{
    constructor(popupSelector, submitForm){// принимает селектор класса popup
        super(popupSelector);
        this._submitForm = submitForm;
        this._buttonForm = this._popup.querySelector('.popup__button');
        this._formPopup = this._popup.querySelector('.popup__form');
    }
    _getInputValues(){//собирает данные полеи
        return this._popup.querySelectorAll('.popup__text');
    }
    setEventListeners(){// переопределяет родительскии метод добовляя сабмит
        super.setEventListeners();
        this._buttonForm.addEventListener('submit', this._submitForm());
    }
    close(){// переопределяет родительскии метод добовляя ресет
        this._formPopup.reset();
        super.close();
    }
}