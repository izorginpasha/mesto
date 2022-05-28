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
const imagePopup = document.querySelector('#popupImage');
const buttonCloseAddCard = cardPopup.querySelector('.popap__close');
const buttonCloseProfilePopup = profilePopup.querySelector('.popap__close');
const buttonCloseProImagePopup = imagePopup.querySelector('.popap__close');


const fioValue = document.getElementById('popapFio');
const hobbyValue = document.getElementById('popapHobby');
const fio = document.querySelector('.profile__fio');
const hobby = document.querySelector('.profile__hobby');
const cardsTemplate = document.querySelector('#cards').content; // заготовка верстки cards
const elementConteiner =  document.querySelector('.element__conteiner');// получаем контеинер для вставки заготовки


function renderCard(data){//на каждыи элемент списка создаем карточку из заготовки
  data.forEach((item)=> elementConteiner.prepend(createCard(item)) ) 
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
  elementImage.addEventListener('click',() => openPopapImage(elementItem));
  return elementItem;
}
function openPopapImage(item){ //функция открытия всплывающего блока картинки
  imagePopup.querySelector('.popap__image').src =item.querySelector('.element-item__image').src;
  imagePopup.querySelector('.popap__image-title').textContent = item.querySelector('.element-item__image').alt;
  openPopup(imagePopup);
}
function openPopup(popup){ //функция открытия всплывающего блока
  popup.classList.add('popap_opened');
}

function openProfilePopup(){//функция создания окна редоктирования профиля
  fioValue.value=fio.textContent;
  hobbyValue.value=hobby.textContent;
  const formProfile = document.querySelector('#popapFormProfile').addEventListener('submit', savePopap);// слушатель кнопки сохранить у окна редактирования профиля
  openPopup(profilePopup);
}
function openAddCardPopup(){//функция создания окна добавления карточки
  name: document.getElementById('popapName').value=null;
    link: document.getElementById('popapLink').value=null;
  const formAddCard = document.querySelector('#popapFormNewMesto').addEventListener('submit',newCardPopap);// слушатель кнопки создать у окна добавления карточки
  openPopup(cardPopup);
}
function closePopup(popup){ // функция закрытия всплывающего елемента
  popup.isDeteted = true;
  popup.classList.remove('popap_opened');
}
function savePopap (event) { // функция обрабочик кнопки сохранить
    event.preventDefault();
      fio.textContent= fioValue.value;
      hobby.textContent = hobbyValue.value;
      closePopup(profilePopup);
} 
function newCardPopap (event) { // функция обрабочик кнопки создать
  event.preventDefault();
  let newCard = {
    name: document.getElementById('popapName').value,
    link: document.getElementById('popapLink').value
    }
    elementConteiner.prepend(createCard(newCard));
  closePopup(cardPopup);

}
renderCard(initialCards);
buttonAdd.addEventListener('click',openAddCardPopup);// слушатель кнопки открытия окна добавления карточки
buttonEdit.addEventListener('click',openProfilePopup); // слушатель кнопки открытия окна редактирования профиля 
buttonCloseAddCard.addEventListener('click', ()=>{closePopup(cardPopup)});//слушатель кнопки закрытия окна добавления карточки
buttonCloseProfilePopup.addEventListener('click', ()=>{closePopup(profilePopup)});//слушатель кнопки закрытия окна редактирования профиля
buttonCloseProImagePopup.addEventListener('click', ()=>{closePopup(imagePopup)});//слушатель кнопки закрытия окна просмотра картинки