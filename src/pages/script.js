import {FormValidator} from '../components/FormValidator.js';
import {Card} from '../components/Card.js';
import {Section} from '../components/Section.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
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
    buttonTitle: 'popup__button-title_ivalid',
    popupErorClass: 'popup__text_error',
    input: '.popup__text',
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

function renderCard(){// передаем  массив
  const section = new Section(initialCards, newItemCard, '.element__container');
  section.renderItems(); 
} 
 function newItemCard(item){// создание карточки
  const card = new Card(selectorCardsTemplate,item,openPopapImage);// создание экземпляра класса 
  return card.createCard();
}
function openPopapImage(link,name){ //функция открытия всплывающего блока картинки
  popupImage.open(link,name);
}

function openPopup(popup){//функция создания окна добавления карточки
  popup.open();
}
function getPopapProfile ({profileName,profileInfo}) { // функция передачи данных в попап 
  fioValue.value =profileName;
  hobbyValue.value = profileInfo;

} 
function savePopapProfile () { // функция обрабочик кнопки сохранить
  userInfo.setUserInfo(fioValue.value,hobbyValue.value);
  } 
function generateCardPopap () { // функция обрабочик кнопки создать
  const newCard = {
    name: someInputName.value,
    link: someInputLink.value
    }
    elementContainer.prepend(newItemCard(newCard));
}
function validation(validation){
  validation.enableValidation();
}
 validation(itemValidProfileConfig);//включение валидации
 validation(itemValidNewMestoConfig);
 renderCard();//создание карточек
buttonAdd.addEventListener('click',()=>{openPopup(popupNewMesto),popupNewMesto._getInputValues()});// слушатель кнопки открытия окна добавления карточки
buttonEdit.addEventListener('click',()=>{openPopup(popupProfile),getPopapProfile(userInfo.getUserInfo())}); // слушатель кнопки открытия окна редактирования профиля 


