
 export  class Card  { // класс создания карточки
    constructor(selectorCardsTemplate, configCard, handleCardClick){ 
      this._handleCardClick = handleCardClick;
      this._selectorCardsTemplate = selectorCardsTemplate;
      this._configCard = configCard;
      this._cardsTemplate =  document.querySelector(this._selectorCardsTemplate).content; // заготовка верстки cards
      this._elementItem = this._cardsTemplate.querySelector('.element-item').cloneNode(true);
      this._elementImage = this._elementItem.querySelector('.element-item__image');
      this._likeNumber = this._elementItem.querySelector('.element-item__number-like');
      this._like= this._like.bind(this);
    }
     createCard(){// создание карточки
      this._elementImage.src = this._configCard.link;
      this._elementImage.alt =this._configCard.link;
      this._elementItem.querySelector('.element-item__title').textContent = this._configCard.name;
        const heart = this._elementItem.querySelector('.element-item__heart');
        heart.addEventListener('click',this._like);
        const basket = this._elementItem.querySelector('.element-item__basket');
        basket.addEventListener('click',()=>{this._removeItem(this._elementItem)});
        this._elementImage.addEventListener('click',()=>this._handleCardClick(this._configCard.link, this._configCard.name ));
        return this._elementItem;       
      }
      _removeItem(item){
       item.remove();
      }
      _like(event){//обрабочик лаика
        event.target.classList.toggle('element-item__heart_like');
        console.log(this._configCard);
        this._likeNumber.textContent=this._configCard.likes.length;
      }
}

