
 export  class Card  { // класс создания карточки
    constructor(selectorCardsTemplate, configCard, handleCardClick,userInfo,handleCardClickDel,like,delLike){
      this._likeApi = like;
      this._delLaike = delLike;
      this.handleCardClickDel = handleCardClickDel; 
      this._handleCardClick = handleCardClick;
      this._selectorCardsTemplate = selectorCardsTemplate;
      this._configCard = configCard;
      this._cardsTemplate =  document.querySelector(this._selectorCardsTemplate).content; // заготовка верстки cards
      this._elementItem = this._cardsTemplate.querySelector('.element-item').cloneNode(true);
      this._elementImage = this._elementItem.querySelector('.element-item__image');
      this._likeNumber = this._elementItem.querySelector('.element-item__number-like');
      this._like= this._like.bind(this);
      this._userInfo=userInfo;
    }
     createCard(){// создание карточки
      this._elementItem.id = this._configCard._id;
      this._elementImage.src = this._configCard.link;
      this._elementImage.alt =this._configCard.link;
      this._elementItem.querySelector('.element-item__title').textContent = this._configCard.name;
        const heart = this._elementItem.querySelector('.element-item__heart');
        heart.addEventListener('click',this._like);
        const basket = this._elementItem.querySelector('.element-item__basket');
       
        if(this._configCard.owner.name===this._userInfo.name){
          basket.classList.add('element-item__basket_open');
          basket.addEventListener('click',()=>{this.handleCardClickDel(this._configCard)});
        }

        this._elementImage.addEventListener('click',()=>this._handleCardClick(this._configCard.link, this._configCard.name ));
        this._likeNumber.textContent=this._configCard.likes.length;
        return this._elementItem;       
      }
      _like(event){//обрабочик лаика
        event.target.classList.toggle('element-item__heart_like');
        if(event.target.classList.contains('element-item__heart_like')){
          this._likeApi(this._elementItem.id);
        }else{
          this._delLaike(this._elementItem.id);
        }
      }
}


