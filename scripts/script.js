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
const editButton = document.querySelector('.profile__edit-button');
let closeButton = null;
const addButton = document.querySelector('.profile__add-button');
let formElement = null;
const fioValue = document.getElementById('popapFio');
const hobbyValue = document.getElementById('popapHobby');
const fio = document.querySelector('.profile__fio');
const hobby = document.querySelector('.profile__hobby');
const form = document.querySelector('.popap__form');
const cardsTemplate = document.querySelector('#cards').content; // заготовка верстки cards
const elementConteiner =  document.querySelector('.element__conteiner');// получаем контеинер для вставки заготовки


function renderList(data){//на каждыи элемент списка создаем карточку из заготовки
  data.forEach((item)=> renderItem(item)) 
} 
function renderItem(item){// создание карточки
  const ElementItem = cardsTemplate.querySelector('.element-item').cloneNode(true);
  ElementItem.querySelector('.element-item__image').src = item.link;
  ElementItem.querySelector('.element-item__image').alt =item.name;
  ElementItem.querySelector('.element-item__title').textContent = item.name;
  elementConteiner.append(ElementItem);
}

function proverca(item){
  console.log(item);
}


function openPopap(event){           //функция открытия всплывающего блока
  proverca(event.target.classList.value);
  if (event.target.classList.value==='profile__edit-button'){
    formElement = document.querySelector('#popapProfile');
    proverca(formElement);
    fioValue.value=fio.textContent;
    hobbyValue.value=hobby.textContent;
    closeButton = formElement.querySelector('.popap__close').addEventListener('click',closePopap);// слушатель кнопки закрытия окна редактирования
    addButton.addEventListener('click',openPopap);
  }else{if(event.target.classList.value==='profile__add-button'){
    formElement = document.querySelector('#popapNewMesto');
    proverca(formElement);
    closeButton = formElement.querySelector('.popap__close').addEventListener('click',closePopap);;
  }} // слушатель кнопки закрытия окна редактирования
  addButton.addEventListener('click',openPopap);
  formElement.classList.add('popap_opened');
  
  
  
}
function closePopap(){ // функция закрытия всплывающего елемента
  proverca(formElement);
  formElement.classList.remove('popap_opened');
  proverca(formElement);
}
function savePopap (evt) { // функция обрабочик кнопки сохранить
    evt.preventDefault();
    fio.textContent= fioValue.value;
    hobby.textContent = hobbyValue.value;
    closePopap();
}
renderList(initialCards);
editButton.addEventListener('click',openPopap); // слушатель кнопки открытия окна редактирования профиля 
form.addEventListener('submit', savePopap);  // слушатель кнопки сохранить у окна редактирования профиля