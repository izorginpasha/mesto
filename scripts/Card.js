class Card{ // класс создания карточки
    constructor(_selectorCardsTemplate, _configCard){ 
      this._selectorCardsTemplate = _selectorCardsTemplate;
      this._configCard = _configCard;
    }
     createCard(){// создание карточки
        const cardsTemplate =  document.querySelector(this._selectorCardsTemplate).content; // заготовка верстки cards
        const elementItem = cardsTemplate.querySelector('.element-item').cloneNode(true);
        const elementImage = elementItem.querySelector('.element-item__image');
        elementImage.src = this._configCard.link;
        elementImage.alt =this._configCard.name;
        elementItem.querySelector('.element-item__title').textContent = this._configCard.name;
        const heart = elementItem.querySelector('.element-item__heart');
        heart.addEventListener('click',(event)=>{heart.classList.toggle('element-item__heart_like');} );
        const basket = elementItem.querySelector('.element-item__basket');
        basket.addEventListener('click',()=>{elementItem.remove()} );
        elementImage.addEventListener('click',openPopapImage);
        return elementItem;
        
      }
}
