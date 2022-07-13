import { Popup } from "./Popup";

export class PopupWithForm extends Popup{
    constructor(popupSelector, sabmitForm){// принимает селектор класса popup
        this._popupSelector= popupSelector;
        this._sabmitForm = sabmitForm;
        this._buttonForm = this._popap.querySelector('.popup__button');
        this._formPopup = this._popap.querySelector('.popup__form');
    }
    _getInputValues(){//собирает данные полеи
        return this._popap.querySelectorAll('.popup__text');
    }
    setEventListeners(){
        super.setEventListeners();
        this._buttonForm.addEventListener('submit', sabmitForm);
    }
    close(){
        this._formPopup.reset();
        super.close();
    }
}