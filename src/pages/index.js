import {FormValidator} from '../components/FormValidator.js';
import {Card} from '../components/Card.js';
import {Section} from '../components/Section.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
import './index.css';
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
  
const validConfig ={// обьекты для валидации 
    button: '.popup__button',
    buttonInvalid: 'popup__button_invalid',
    buttonValid: 'popup__button_valid',
    buttonInvalidSpan: 'popup__button-title_ivalid',
    buttonTitle: 'popup__button-title_ivalid',
    popupErorClass: 'popup__text_error',
    input: '.popup__text',
    popupSpan: '.popup__button-title',
}
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const buttonSaveProfile = document.querySelector('#popupFormProfile');
const buttonNewCard = document.querySelector('#popupFormNewMesto');
const someInputName = document.querySelector('#popupName');
const someInputLink = document.querySelector('#popupLink');
const fioValue = document.querySelector('#popupFio');
const hobbyValue = document.querySelector('#popupHobby');
const elementContainer =  document.querySelector('.element__container');// получаем контеинер для вставки заготовки
const itemValidProfileConfig = new FormValidator(validConfig,buttonSaveProfile);// создание экземпляра класса валидности, для формы редактирвания профиля
const itemValidNewMestoConfig = new FormValidator(validConfig, buttonNewCard );// создание экземпляра класса валидности, для формы добавления карточки
const selectorCardsTemplate = '#cards';
const popupNewMesto = new PopupWithForm('#popupNewMesto', generateCardPopap);
const popupProfile = new PopupWithForm('#popupProfile', savePopapProfile);
const popupImage = new PopupWithImage('#popupImage');
const userInfo = new UserInfo({selectorUser:'.profile__fio',selectorUserInfo:'.profile__hobby'});
const section = new Section(initialCards, newItemCard, '.element__container');

function renderCard(){// передаем  массив
  section.renderItems(); 
} 
 function newItemCard(item){// создание карточки
  const card = new Card(selectorCardsTemplate,item,openPopapImage);// создание экземпляра класса 
  return card.createCard();
}
function openPopapImage(link,name){ //функция открытия всплывающего блока картинки
  popupImage.open(link,name);
}
function getPopapProfile ({profileName,profileInfo}) { // функция передачи данных в попап 
  fioValue.value =profileName;
  hobbyValue.value = profileInfo;
} 
function savePopapProfile ({popupFio,popupHobby}) { // функция обрабочик кнопки сохранить
  userInfo.setUserInfo(popupFio,popupHobby);
  } 
function generateCardPopap ({popupName,popupLink}) { // функция обрабочик кнопки создать
  const newCard = {
    name: popupName,
    link: popupLink
    }
    section.addItem(newItemCard(newCard));
}
 itemValidProfileConfig.enableValidation();//включение валидации
 itemValidNewMestoConfig.enableValidation();
 renderCard();//создание карточек
buttonAdd.addEventListener('click',()=>{popupNewMesto.open(),itemValidNewMestoConfig.resetEror()});// слушатель кнопки открытия окна добавления карточки
buttonEdit.addEventListener('click',()=>{popupProfile.open(),getPopapProfile(userInfo.getUserInfo(),itemValidProfileConfig.resetEror())}); // слушатель кнопки открытия окна редактирования профиля 


