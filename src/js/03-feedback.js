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

  const newObj = {};
    newObj[emailInput.name]= e.target.email.value;
    newObj[messageInput.name] = e.target.message.value;

  console.log(newObj);
  localStorage.removeItem(LOCALSTORAGE_KEY);
  e.target.reset();
}



