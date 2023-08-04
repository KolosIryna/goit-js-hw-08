import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('.feedback-form input');
const messageTextarea = document.querySelector('.feedback-form textarea');

const LS_KEY = "feedback-form-state";

formLocalStorage();

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

function onInput() {
    const formData = {
      email: inputEmail.value,
      message: messageTextarea.value,
    };
    localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

function onSubmit(event) {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(LS_KEY)));
    localStorage.removeItem(LS_KEY);
    form.reset();
     
}

function formLocalStorage() {
    const localStorageValue = JSON.parse(localStorage.getItem(LS_KEY));
    if (!localStorageValue) {
      return;
    }
    inputEmail.value = localStorageValue.email;
    messageTextarea.value = localStorageValue.message;
}