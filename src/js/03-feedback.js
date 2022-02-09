import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector("input[name=email]");
const messageInput = document.querySelector("textarea[name=message]");


//Пусть ключом для хранилища будет строка
// "feedback-form-state".

const LOCALSTORAGE_KEY = "feedback-form-state";

let objectForm = {};

onFormReload();
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд.
// Для этого добавь в проект и используй библиотеку lodash.throttle.

form.addEventListener("input", throttle(onFormInput, 500));


//// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email
// и message, в которых сохраняй текущие значения полей формы.

function onFormInput(e) {
 objectForm[e.target.name] = e.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectForm));
}

// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими
// поля формы.В противном случае поля должны быть пустыми.

function onFormReload() {
  if (localStorage[LOCALSTORAGE_KEY]) {
    try {
      objectForm = JSON.parse(localStorage[LOCALSTORAGE_KEY]);
    } catch {
      emailInput = '';
      messageInput = '';
    }
    emailInput.value = objectForm.email ? objectForm.email : '';
    messageInput.value = objectForm.message ? objectForm.message : '';
  }
}

// При сабмите формы очищай хранилище и поля формы, а также выводи объект
// с полями email, message и текущими их значениями в консоль.

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  // const form = e.target.closest('form');
  // const formData = new FormData(form);
  // const finalData = {};

  // for (const [key, value] of formData.entries()) {
  //   finalData[key] = value;
  // }

  // const newObj = {};
  //   newObj[emailInput.name]= e.target.email.value;
  //   newObj[messageInput.name] = e.target.message.value;
  const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  console.log(data);
  //console.log(newObj);
  localStorage.removeItem(LOCALSTORAGE_KEY);
  e.target.reset();
}


// git add .
// git commit -m "Do commit"
// git push
//------------------------------------------------------------
//import throttle from "lodash.throttle";
// const formInputRef = document.querySelector('.feedback-form');

// formInputRef.addEventListener('submit', onFormSubmit);
// formInputRef.addEventListener('input', throttle(onTextAreaInput, 500));


// let dataLS = localStorage.getItem("feedback-form-state");

// if (dataLS) {
//     const data = JSON.parse(dataLS);
//     formInputRef.elements.email.value = data.email;
//     formInputRef.elements.message.value = data.message;

// };


// function onTextAreaInput(e) {
//  const formData = {
//         email: formInputRef.elements.email.value,
//         message: formInputRef.elements.message.value
//     }
//     localStorage.setItem("feedback-form-state", JSON.stringify(formData));
// }

// function onFormSubmit(e) {
//     e.preventDefault();
//     data = JSON.parse(localStorage.getItem("feedback-form-state"));
//     console.log(data);
//     localStorage.removeItem("feedback-form-state");
//     e.target.reset();
// }