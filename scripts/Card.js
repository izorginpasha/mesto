
 export  class Card  { // класс создания карточки
    constructor(selectorCardsTemplate, configCard,openPopapImage){ 
      this._selectorCardsTemplate = selectorCardsTemplate;
      this._configCard = configCard;
      this._openPopapImage = openPopapImage;
      this._cardsTemplate =  document.querySelector(this._selectorCardsTemplate).content; // заготовка верстки cards
      this._elementItem = this._cardsTemplate.querySelector('.element-item').cloneNode(true);
      this._elementImage = this._elementItem.querySelector('.element-item__image');
    }
     createCard(){// создание карточки
      this._elementImage.src = this._configCard.link;
      this._elementImage.alt =this._configCard.name;
      this._elementItem.querySelector('.element-item__title').textContent = this._configCard.name;
        const heart = this._elementItem.querySelector('.element-item__heart');
        heart.addEventListener('click',this._like);
        const basket = this._elementItem.querySelector('.element-item__basket');
        basket.addEventListener('click',this._removeItem);
        this._elementImage.addEventListener('click',this._openPopapImage);
        return this._elementItem;       
      }
      _removeItem(){
        document.querySelector('.element-item').remove();
      }
      _like(event){//обрабочик лаика
        event.target.classList.toggle('element-item__heart_like');
      }
}

