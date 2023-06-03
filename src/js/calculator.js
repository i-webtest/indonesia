const selectToggle1 = document.querySelector('#select-1 .itc-select__toggle');
const selectToggle2 = document.querySelector('#select-2 .itc-select1__toggle');
const selectToggle3 = document.querySelector('#select-3 .itc-select2__toggle');
const selectToggle4 = document.querySelector('#select-4 .itc-select__toggle');
const selectToggle5 = document.querySelector('#select-5 .itc-select5__toggle');
const selectToggle6 = document.querySelector('#select-6 .itc-select6__toggle');
const selectInput = document.querySelectorAll('.itc-select2__input');
const selectInput6 = document.querySelectorAll('.itc-select6__input');

const input4 = document.querySelector('#select-4 input');

const select1 = document.querySelector('#select-1');
const select2 = document.querySelector('#select-2');
const select3 = document.querySelector('#select-3');
const select4 = document.querySelector('#select-4');
const select5 = document.querySelector('#select-5');
const select6 = document.querySelector('#select-6');

const labelDate = document.querySelector('.tour__form-label_date');
const labelPeople = document.querySelector('.tour__form-label_people');
const labelOption = document.querySelector('.tour__form-label_option');

const btn = document.querySelector('.itc-select2__toggle');
const option = document.querySelectorAll('.itc-select2__option');

option.forEach((item) => {
  item.addEventListener('change', () => {
    btn.textContent = item.textContent;
  });
});

const btn6 = document.querySelector('.itc-select6__toggle');
const option6 = document.querySelectorAll('.itc-select6__option');

option6.forEach((item) => {
  item.addEventListener('change', () => {
    btn6.textContent = item.textContent;
  });
});

selectToggle1.addEventListener('click', () => {
  selectToggle4.value = selectToggle1.textContent;
  selectToggle4.textContent = selectToggle4.value;
});

selectToggle2.addEventListener('click', () => {
  selectToggle5.value = selectToggle2.textContent;
  selectToggle5.textContent = selectToggle5.value;
});

selectToggle3.addEventListener('click', () => {
  selectToggle6.textContent = selectToggle3.textContent;
});

selectInput.forEach((item) => {
  item.addEventListener('click', () => {
    selectToggle3.value = item.value;
    selectToggle6.textContent = item.value;
    selectToggle6.value = selectToggle6.textContent;
  });
});
selectInput6.forEach((item) => {
  item.addEventListener('change', () => {
    selectToggle6.value = item.value;
  });
});
