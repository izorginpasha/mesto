import {PopupWithForm} from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';
import { PopupWithDel } from '../components/PopupWithDel.js';
import {FormValidator} from '../components/FormValidator.js';
import {Section} from '../components/Section.js';
import {Card} from '../components/Card.js';
export const validConfig ={// обьекты для валидации 
    button: '.popup__button',
    buttonInvalid: 'popup__button_invalid',
    buttonValid: 'popup__button_valid',
    buttonInvalidSpan: 'popup__button-title_ivalid',
    buttonTitle: 'popup__button-title_ivalid',
    popupErorClass: 'popup__text_error',
    input: '.popup__text',
    popupSpan: '.popup__button-title',
}
export const buttonEdit = document.querySelector('.profile__edit-button');
export const buttonAdd = document.querySelector('.profile__add-button');
export const buttonSaveProfile = document.querySelector('#popupFormProfile');
export const buttonNewCard = document.querySelector('#popupFormNewMesto');
export const fioValue = document.querySelector('#popupFio');
export const hobbyValue = document.querySelector('#popupHobby');
export const AvatarForm = document.querySelector('#popupFormNewAvatar');
export const buttonAvatarEdit = document.querySelector('.profile__overlay');
export const button = document.querySelector('.popup__button');
export const itemValidProfileConfig = new FormValidator(validConfig,buttonSaveProfile);// создание экземпляра класса валидности, для формы редактирвания профиля
export const itemValidNewMestoConfig = new FormValidator(validConfig, buttonNewCard );// создание экземпляра класса валидности, для формы добавления карточки
export const itemValidNewAvatarConfig = new FormValidator(validConfig, AvatarForm );
export const selectorCardsTemplate = '#cards';
export const popupNewMesto = new PopupWithForm('#popupNewMesto', generateCardPopap);
export const popupProfile = new PopupWithForm('#popupProfile',savePopapProfile);
export const popupNewAvatar = new PopupWithForm('#popupNewAvatar', newAvatarEdit);
export const popupDelCard = new PopupWithDel('#popupDelCard',delCard);
export const popupImage = new PopupWithImage('#popupImage');
export const userInfo = new UserInfo({selectorUser:'.profile__fio',selectorUserInfo:'.profile__hobby',selectorUserAvatar:".profile__avatar"});
export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-46',
  headers: {
    authorization: '2c2cc31b-0d76-4800-929a-85e50fdda30e',
    'Content-Type': 'application/json'
  }
});
 function generateCardPopap ({popupName,popupLink}) { // функция обрабочик кнопки создать
  
    api.setCard(popupName,popupLink).then((result) => {
     section.addItem(newItemCard(result));
     popupNewMesto.close();
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
    .finally(()=>{ popupNewMesto.buttonSpan.textContent="Сохранить";
    
  }) ;
}


 function savePopapProfile ({popupFio,popupHobby}) { // функция обрабочик кнопки сохранить
    api.setUserProfile(popupFio,popupHobby).then((result) => {
     userInfo.setUserInfo(result); // добавляем результат запроса на страницу
     popupProfile.close();//закрываем окно
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
    
    .finally(()=>{ popupProfile.buttonSpan.textContent="Сохранить";
  }) ;
    
} 
function newAvatarEdit ({popupLinkAvatar}) { // обновление аватара
    api.setUserAvatar(popupLinkAvatar).then((result) => {
      userInfo.setUserInfo(result); // добавляем результат запроса на страницу
      popupNewAvatar.close();
     })
     .catch((err) => {
       console.log(err); // выведем ошибку в консоль
     }).finally(()=>{ popupNewAvatar.buttonSpan.textContent="Сохранить";
   }) ; 
  
  }
function delCard  (cardId){//удаление по ID
    api.delCard(cardId).then((result) => {
      document.getElementById(cardId).remove();
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
  }
export let section;
export const renderCard=(initialCards)=>{// передаем  массив
    section = new Section(initialCards, newItemCard, '.element__container');
   section.renderItems(); 
 }   
export const newItemCard=(item)=>{// создание карточки
  const card = new Card(selectorCardsTemplate,item,openPopapImage,userInfo._user,openPopapDel,like,delLike);// создание экземпляра класса 
  return card.createCard();
}
export const openPopapImage=(link,name)=>{ //функция открытия всплывающего блока картинки
  popupImage.open(link,name);
}
export const openPopapDel=(item)=>{
  popupDelCard.open(item);
  

}
export const getPopapProfile = ({profileName,profileInfo})=> { // функция передачи данных в попап 
    fioValue.value =profileName;
    hobbyValue.value = profileInfo;
  } 

export const like=(cardId)=>{
  api.like(cardId).then((result) => {
    document.getElementById(cardId).querySelector(".element-item__number-like").textContent=result.likes.length;
    document.getElementById(cardId).querySelector('.element-item__heart').classList.add('element-item__heart_like');
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });
}
export const delLike=(cardId)=>{
  
  api.delLike(cardId).then((result) => {
    document.getElementById(cardId).querySelector(".element-item__number-like").textContent=result.likes.length;
    document.getElementById(cardId).querySelector('.element-item__heart').classList.remove('element-item__heart_like');
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });
}