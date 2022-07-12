import { Popup } from "./Popup";

export class PopupWithmage extends Popup{

    open(event){
        this._imagePopup = this._popap.querySelector('.popup__image');
        this._imagePopup.src =event.target.src;
        this._imagePopupTitle.textContent = event.target.alt;
        this._imagePopup.alt=event.target.alt;
        super.open();
    }
}