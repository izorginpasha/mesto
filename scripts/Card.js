
 export class Card  { // класс создания карточки
    constructor(_selectorCardsTemplate, _configCard,openPopapImage){ 
      this._selectorCardsTemplate = _selectorCardsTemplate;
      this._configCard = _configCard;
      this._openPopapImage = openPopapImage;
    }
     createCard(){// создание карточки
        const cardsTemplate =  document.querySelector(this._selectorCardsTemplate).content; // заготовка верстки cards
        const elementItem = cardsTemplate.querySelector('.element-item').cloneNode(true);
        const elementImage = elementItem.querySelector('.element-item__image');
        
        elementImage.src = this._configCard.link;
        elementImage.alt =this._configCard.name;
        elementItem.querySelector('.element-item__title').textContent = this._configCard.name;
        const heart = elementItem.querySelector('.element-item__heart');
        heart.addEventListener('click',this._like);
        const basket = elementItem.querySelector('.element-item__basket');
        basket.addEventListener('click',()=>{elementItem.remove()} );
        elementImage.addEventListener('click',this._openPopapImage);
        return elementItem;
        
      }
      _like(event){//обрабочик лаика
        event.target.classList.toggle('element-item__heart_like');

      }
}

