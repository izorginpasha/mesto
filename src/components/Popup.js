export class Popup{
    constructor(popupSelector){// принимает селектор класса popup
        this._popupSelector= popupSelector;
        this._popup= document.querySelector(this._popupSelector);// находим попап
        this._buttonClose = this._popup.querySelector('.popup__close'); // находим кнопку закрытия popup
        this._overlay = this._popup.querySelector('.popup__overlay');
        this.setEventListeners= this.setEventListeners();
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    
    open(){//метод открытия popup
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown',this._handleEscClose);
    }
    close(){// метод закрытия popup
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown',this._handleEscClose);
    }
    
    _handleEscClose(e){// метод закрытия по нажатию ESC
        if(e.key === "Escape"){
            this.close();
          }
    }
    setEventListeners(){
        this._buttonClose.addEventListener('click',()=>this.close());// обрабочик закрытия попап по клику на кнопку 
        this._overlay.addEventListener('click',()=>this.close());//обрабочик закрытия попап по клику по пустои области
    }

}