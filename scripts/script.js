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
const buttonClose = document.querySelector('.popap__close').addEventListener('click', (event)=>{closePopap(event.target.closest(".popap"))});//слушатель кнопки закрытия

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
  imageClose = imagePopup.querySelector('.popap__close').addEventListener('click',() =>{closePopap(imagePopup)});// слушатель кнопки закрытия окна редактирования
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
  const formProfile = profilePopup.querySelector('.popap__form').addEventListener('submit', savePopap);// слушатель кнопки сохранить у окна редактирования профиля
  openPopup(profilePopup);
}
function openAddCardPopup(){//функция создания окна добавления карточки

}
// function openPopap(event){  //функция открытия всплывающего блока
//   if (event.target.classList.value==='profile__edit-button'){
//     formElement = document.querySelector('#popapProfile');
//     fioValue.value=fio.textContent;
//     hobbyValue.value=hobby.textContent;
//     } else {
//       if(event.target.classList.value==='profile__add-button'){
//     formElement = document.querySelector('#popapNewMesto');
//       }
//     }
//     buttonClose = formElement.querySelector('.popap__close').addEventListener('click', closePopap);// слушатель кнопки закрытия окна редактирования
//     form = formElement.querySelector('.popap__form').addEventListener('submit', savePopap);// слушатель кнопки сохранить у окна редактирования профиля
//     formElement.classList.add('popap_opened');
// }
function closePopap(popup){ // функция закрытия всплывающего елемента
  console.log(popup);
    popup.classList.remove('popap_opened');
    
}

function savePopap (evnt) { // функция обрабочик кнопки сохранить
    evnt.preventDefault();
      fio.textContent= fioValue.value;
      hobby.textContent = hobbyValue.value;
      closePopap(profilePopup);
    } 
    //     }
    // } 
//       if(evnt.target.id==="popapFormNewMesto"){
//         let a = {
//           name: document.getElementById('popapName').value,
//           link: document.getElementById('popapLink').value
//         }
//         renderItem(a);
//         closePopap();
//       }
//     }
// }
renderCard(initialCards);
buttonAdd.addEventListener('click',()=>{openPopup(cardPopup)});
buttonEdit.addEventListener('click',openProfilePopup); // слушатель кнопки открытия окна редактирования профиля 
  