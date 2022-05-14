let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popap__close');
let formElement =document.querySelector('.popap');
let fioValue = document.getElementById('popapFio');
let hobbyValue = document.getElementById('popapHobby');
let fio = document.querySelector('.profile__fio');
let hobby = document.querySelector('.profile__hobby');

function openPopap(){           //функция открытия всплывающего блока
    formElement.classList.add('popap_opened');
    fioValue.value=fio.textContent;
    hobbyValue.value=hobby.textContent;
}
function closePopap(){ // функция закрытия всплывающего елемента
    formElement.classList.remove('popap_opened');
}
function savePopap (evt) { // функция обрабочик кнопки сохранить
    evt.preventDefault();
    fio.textContent= fioValue.value;
    hobby.textContent = hobbyValue.value;
    closePopap();
}

editButton.addEventListener('click',openPopap); // слушатель кнопки открытия окна редактирования профиля
closeButton.addEventListener('click',closePopap); // слушатель кнопки закрытия окна редактирования
formElement.querySelector('.popap__form').addEventListener('submit', savePopap);  // слушатель кнопки сохранить у окна редактирования профиля