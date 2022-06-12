const initialCards = [ // массив карточек
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const profilePopup = document.querySelector('#popupProfile');
const cardPopup = document.querySelector('#popupNewMesto');
const WindowImagePopup = document.querySelector('#popupImage');
const imagePopup = WindowImagePopup.querySelector('.popup__image');
const imagePopupTitle = WindowImagePopup.querySelector('.popup__image-title');
const buttonCloseAddCard = cardPopup.querySelector('.popup__close');
const buttonCloseProfilePopup = profilePopup.querySelector('.popup__close');
const buttonCloseProImagePopup = WindowImagePopup.querySelector('.popup__close');
const buttonSaveProfile = document.querySelector('#popupFormProfile');
const buttonNewCard = document.querySelector('#popupFormNewMesto');
const someInputName = document.getElementById('popupName');
const someInputLink = document.getElementById('popupLink');


const fioValue = document.getElementById('popupFio');
const hobbyValue = document.getElementById('popupHobby');
const fio = document.querySelector('.profile__fio');
const hobby = document.querySelector('.profile__hobby');
const cardsTemplate = document.querySelector('#cards').content; // заготовка верстки cards
const elementContainer =  document.querySelector('.element__container');// получаем контеинер для вставки заготовки


function renderCard(data){//на каждыи элемент списка создаем карточку из заготовки
  data.forEach((item)=> elementContainer.prepend(createCard(item)) ) 
} 
function createCard(item){// создание карточки
  const elementItem = cardsTemplate.querySelector('.element-item').cloneNode(true);
  const elementImage = elementItem.querySelector('.element-item__image');
  elementImage.src = item.link;
  elementImage.alt =item.name;
  elementItem.querySelector('.element-item__title').textContent = item.name;
  const heart = elementItem.querySelector('.element-item__heart');
  heart.addEventListener('click',(event)=>{heart.classList.toggle('element-item__heart_like');} );
  const basket = elementItem.querySelector('.element-item__basket');
  basket.addEventListener('click',()=>{elementItem.remove()} );
  elementImage.addEventListener('click',openPopapImage);
  return elementItem;
}
function openPopapImage(event){ //функция открытия всплывающего блока картинки
  imagePopup.src =event.target.src;
  imagePopupTitle.textContent = event.target.alt;
  imagePopup.alt=event.target.alt;
  openPopup(WindowImagePopup);
}
function openPopup(popup){ //функция открытия всплывающего блока
  popup.classList.add('popup_opened');
}

function openProfilePopup(){//функция создания окна редоктирования профиля
  fioValue.value=fio.textContent;
  hobbyValue.value=hobby.textContent;
  openPopup(profilePopup);
}
function openAddCardPopup(){//функция создания окна добавления карточки
   someInputName.value="";
   someInputLink.value="";
  openPopup(cardPopup);
}
function closePopup(popup){ // функция закрытия всплывающего елемента
  popup.classList.remove('popup_opened');
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
    name: document.getElementById('popupName').value,
    link: document.getElementById('popupLink').value
    }
    elementContainer.prepend(createCard(newCard));
  closePopup(cardPopup);

}
renderCard(initialCards);
buttonAdd.addEventListener('click',openAddCardPopup);// слушатель кнопки открытия окна добавления карточки
buttonEdit.addEventListener('click',openProfilePopup); // слушатель кнопки открытия окна редактирования профиля 
buttonCloseAddCard.addEventListener('click', ()=>{closePopup(cardPopup)});//слушатель кнопки закрытия окна добавления карточки
buttonCloseProfilePopup.addEventListener('click', ()=>{closePopup(profilePopup)});//слушатель кнопки закрытия окна редактирования профиля
buttonCloseProImagePopup.addEventListener('click', ()=>{closePopup(WindowImagePopup)});//слушатель кнопки закрытия окна просмотра картинки
buttonSaveProfile.addEventListener('submit', savePopapProfile);// слушатель кнопки сохранить у окна редактирования профиля
buttonNewCard.addEventListener('submit',generateCardPopap);// слушатель кнопки создать у окна добавления карточки
class add{
  
}