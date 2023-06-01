const inputDate = document.querySelector('.form__input-date');
const inputPeople = document.querySelector('.form__input-people');
const inputOption = document.querySelector('.form__input-option');
const inputName = document.querySelector('.form__input-name');
const inputEmail = document.querySelector('.form__input-mail');
const inputTel = document.querySelector('.form__input-phone');

const footerInput = document.querySelector('.footer__form-input');
const footerInputPlaceholder = document.querySelector('.footer__form-input[placeholder]');

const labelDate = document.querySelector('.form__label-date');
const labelPeople = document.querySelector('.form__label-people');
const labelOption = document.querySelector('.form__label-option');

const labelName = document.querySelector('.form__label-name');
const labelMail = document.querySelector('.form__label-mail');
const labelPhone = document.querySelector('.form__label-phone');

const telMask = new Inputmask('+7 (999)-999-99-99');
telMask.mask(inputTel);

inputName.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\s]+/i, '');
  e.target.style.border = null;
  labelName.style.border = null;
});

inputName.addEventListener('invalid', (e) => {
  e.preventDefault();
  e.target.style.border = '1px solid red';
});

inputEmail.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/[^\w@\-.!~*']+/gi, '');
  e.target.style.border = null;
  labelMail.style.border = null;
});

inputEmail.addEventListener('invalid', (e) => {
  e.preventDefault();
  e.target.style.border = '1px solid red';
});

inputTel.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/[^\d+()-]+/gi, '');
  e.target.style.border = null;
  labelPhone.style.border = null;
});

inputTel.addEventListener('invalid', (e) => {
  e.preventDefault();
  e.target.style.border = '1px solid red';
});

footerInput.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/[^\w@\-.!~*']+/gi, '');
  e.target.style.borderBottom = null;
  e.target.style.color = null;
  footerInputPlaceholder.style.color = null;
  footerInput.style.borderBottom = null;
});

footerInput.addEventListener('invalid', (e) => {
  e.preventDefault();
  e.target.style.color = 'red';
  e.target.style.borderBottom = '1px solid red';
});
