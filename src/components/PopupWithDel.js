import { Popup } from "./Popup.js";

export class PopupWithDel extends Popup{
    constructor(popupSelector,delCard){// принимает селектор класса popup
        super(popupSelector);
        this._delCard=delCard;
        this._formPopup = this._popup.querySelector('.popup__form');
        this._configCard={};
        this._removeItem = this._removeItem.bind(this)
    }
    setEventListeners(configCard,elementCard){// переопределяет родительскии метод добовляя сабмит
        super.setEventListeners();
        Object.assign(this._configCard,configCard);
        this._CardItem = elementCard;
        this._formPopup.addEventListener('submit',this._removeItem);
    }
    _removeItem(evt){
        evt.preventDefault();
        document.getElementById(this._configCard._id).remove();
        this.close();
        this._delCard(this._configCard._id);
       }
    
}