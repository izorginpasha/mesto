import { Popup } from "./Popup.js";

export class PopupWithDel extends Popup{
    constructor(popupSelector,delCard){// принимает селектор класса popup
        super(popupSelector);
        this._delCard=delCard;
        this._formPopup = this._popup.querySelector('.popup__form');
        this._configCard={};
        this._removeItem = this._removeItem.bind(this)
    }
    open(configCard){
        super.open();
        Object.assign(this._configCard,configCard);
    }
    setEventListeners(){// переопределяет родительскии метод добовляя сабмит
        super.setEventListeners();
        this._formPopup.addEventListener('submit',this._removeItem);
    }
    _removeItem(evt){
        evt.preventDefault();
        this.close();
        this._delCard(this._configCard._id);
       }
    
}