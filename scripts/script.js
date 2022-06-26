
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const profilePopup = document.querySelector('#popupProfile');
const cardPopup = document.querySelector('#popupNewMesto');
const windowImagePopup = document.querySelector('#popupImage');
const imagePopup = windowImagePopup.querySelector('.popup__image');
const imagePopupTitle = windowImagePopup.querySelector('.popup__image-title');
const buttonCloseAddCard = cardPopup.querySelector('.popup__close');
const buttonCloseProfilePopup = profilePopup.querySelector('.popup__close');
const buttonCloseProImagePopup = windowImagePopup.querySelector('.popup__close');
const buttonSaveProfile = document.querySelector('#popupFormProfile');
const buttonNewCard = document.querySelector('#popupFormNewMesto');
const someInputName = document.querySelector('#popupName');
const someInputLink = document.querySelector('#popupLink');
const popupOverleyProfile = profilePopup.querySelector('.popup__overlay');
const popupOverleyNewMesto = cardPopup.querySelector('.popup__overlay');
const popupOverleyImage = windowImagePopup.querySelector('.popup__overlay');
const fioValue = document.querySelector('#popupFio');
const hobbyValue = document.querySelector('#popupHobby');
const fio = document.querySelector('.profile__fio');
const hobby = document.querySelector('.profile__hobby');
const cardsTemplate = document.querySelector('#cards').content; // заготовка верстки cards
const elementContainer =  document.querySelector('.element__container');// получаем контеинер для вставки заготовки


function renderCard(data){//на каждыи элемент списка создаем карточку из заготовки
  // data.forEach((item)=> elementContainer.prepend(createCard(item)) ) 
  data.forEach((item)=> elementContainer.prepend(createCard(item)) ) 
} 
function createCard(item){// создание карточки
  const selectorCardsTemplate = '#cards';
  const card = new Card(selectorCardsTemplate,item);// создание экземпляра класса 
    return card.createCard();
}

function openPopapImage(event){ //функция открытия всплывающего блока картинки
  imagePopup.src =event.target.src;
  imagePopupTitle.textContent = event.target.alt;
  imagePopup.alt=event.target.alt;
  openPopup(windowImagePopup);
}
function openPopup(popup){ //функция открытия всплывающего блока
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', doSomething);
}

function openProfilePopup(){//функция создания окна редоктирования профиля
  fioValue.value=fio.textContent;
  hobbyValue.value=hobby.textContent;
  openPopup(profilePopup);
}
function openAddCardPopup(){//функция создания окна добавления карточки
  buttonNewCard.reset();
  openPopup(cardPopup);
}
function closePopup(popup){ // функция закрытия всплывающего елемента
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', doSomething);
}
function savePopapProfile (event) { // функция обрабочик кнопки сохранить
    event.preventDefault();
      fio.textContent= fioValue.value;
      hobby.textContent = hobbyValue.value;
      closePopup(profilePopup);
} 
function generateCardPopap (event) { // функция обрабочик кнопки создать
  event.preventDefault();
  const newCard = {
    name: someInputName.value,
    link: someInputLink.value
    }
    elementContainer.prepend(createCard(newCard));
    const form = event.currentTarget;
    const button = form.querySelector(".popup__button");
    button.setAttribute("disabled", true);
  closePopup(cardPopup);

  
  

}
function doSomething(e){
  if(e.key === "Escape"){
    const popup = document.querySelector(".popup_opened");
    closePopup(popup);

  }
}

renderCard(initialCards);
buttonAdd.addEventListener('click',openAddCardPopup);// слушатель кнопки открытия окна добавления карточки
buttonEdit.addEventListener('click',openProfilePopup); // слушатель кнопки открытия окна редактирования профиля 
buttonCloseAddCard.addEventListener('click', ()=>{closePopup(cardPopup)});//слушатель кнопки закрытия окна добавления карточки
buttonCloseProfilePopup.addEventListener('click', ()=>{closePopup(profilePopup)});//слушатель кнопки закрытия окна редактирования профиля
buttonCloseProImagePopup.addEventListener('click', ()=>{closePopup(windowImagePopup)});//слушатель кнопки закрытия окна просмотра картинки
buttonSaveProfile.addEventListener('submit', savePopapProfile);// слушатель кнопки сохранить у окна редактирования профиля
buttonNewCard.addEventListener('submit',generateCardPopap);// слушатель кнопки создать у окна добавления карточки

popupOverleyNewMesto.addEventListener('click',function(event){//слушатель оверлея
  closePopup(document.querySelector(".popup_opened"));
} );
popupOverleyProfile.addEventListener('click',function(event){
  closePopup(document.querySelector(".popup_opened"));
} );
popupOverleyImage.addEventListener('click',function(event){
  closePopup(document.querySelector(".popup_opened"));
} );


