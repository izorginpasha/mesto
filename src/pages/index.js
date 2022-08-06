
import {buttonEdit,buttonAdd,itemValidProfileConfig,buttonAvatarEdit,itemValidNewMestoConfig,selectorCardsTemplate,
  popupNewMesto,popupProfile,popupNewAvatar,popupImage,userInfo,getPopapProfile,userProfile,itemValidNewAvatarConfig,popupDelCard,api,renderCard} from '../utils/Constants.js';
import './index.css';

popupNewMesto.setEventListeners();//добавляем слушатели окна добавления карточки
popupProfile.setEventListeners();//добавляем слушатели окна редае
popupImage.setEventListeners();//добавляем слушатели окна картинки
popupNewAvatar.setEventListeners();//добавляем слушатели окна avatar
popupDelCard.setEventListeners();//добавляем слушатели окна delCard
 itemValidProfileConfig.enableValidation();//включение валидации
 itemValidNewMestoConfig.enableValidation();
 itemValidNewAvatarConfig.enableValidation();
 Promise.all([api.getUser(), api.getInitialCards()])
 // тут деструктурируете ответ от сервера, чтобы было понятнее, что пришло
   .then(([userData, cards]) => {

       userInfo.setUserInfo(userData);// тут установка данных пользователя
       renderCard(cards); // и тут отрисовка карточек
   })
   .catch(err => {
    console.log(err); // тут ловим ошибку
   });
 

buttonAdd.addEventListener('click',()=>{popupNewMesto.open(),itemValidNewMestoConfig.resetEror()});// слушатель кнопки открытия окна добавления карточки
buttonEdit.addEventListener('click',()=>{popupProfile.open(),getPopapProfile(userInfo.getUserInfo(),itemValidProfileConfig.resetEror())}); // слушатель кнопки открытия окна редактирования профиля 
buttonAvatarEdit.addEventListener('click',()=>{popupNewAvatar.open(),itemValidNewAvatarConfig.resetEror()});

