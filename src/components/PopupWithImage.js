import { Popup } from "./Popup.js";

export class PopupWithmage extends Popup{
    constructor(popupSelector){// принимает селектор класса popup
        super(popupSelector);
        this._imagePopup = this._popup.querySelector('.popup__image');
        this._imagePopupTitle = this._popup.querySelector('.popup__image-title');
    }
    open(link,name){ 
        this._imagePopup.src =link;
        this._imagePopupTitle.textContent = name;
        this._imagePopup.alt=name;
        super.open();
    }
}