let popap = document.querySelector('.popap');
let editButton = document.querySelector('.profile-info__edit-button');
let closeButton = document.querySelector('.popap__close');
let formElement =document.querySelector('.popap');

function openPopap(){
    popap.classList.add('popap_opened');
}
function closePopap(){
    popap.classList.remove('popap_opened');
}
function formSubmitHandler (evt) {
    evt.preventDefault();
    let nameInput = formElement.querySelector('.popap__fio');
    let jobInput = formElement.querySelector('.popap__hobby');
    let fioValue = nameInput.value;
    let hobbyValue = jobInput.value;
    let fio = document.querySelector('.profile-info__fio');
    let hobby = document.querySelector('.profile-info__hobby');
    fio.textContent= fioValue;
    hobby.textContent = hobbyValue;
    closePopap();
}

editButton.addEventListener('click',openPopap);
closeButton.addEventListener('click',closePopap);
formElement.addEventListener('submit', formSubmitHandler); 