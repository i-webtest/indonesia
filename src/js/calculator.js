// const select = document.querySelector('.itc-select');
// const select2 = document.querySelector('.itc-select2');
// const btn = document.querySelector('.itc-select__btn');
// const btn2 = document.querySelector('.itc-select2__btn');

// const closeSelect = () => {
//   select.classList.remove('itc-select_show');
// };

// const closeSelect2 = () => {
//   select2.classList.remove('itc-select2_show');
// };

// btn.addEventListener('click', closeSelect);
// btn2.addEventListener('click', closeSelect2);
const btn = document.querySelector('.itc-select2__toggle');
console.log('btn: ', btn.textContent);
const option = document.querySelectorAll('.itc-select2__option');

option.forEach((item) => {
  item.addEventListener('change', () => {
    btn.textContent = item.textContent;
  });
});

const btn6 = document.querySelector('.itc-select6__toggle');
console.log('btn: ', btn.textContent);
const option6 = document.querySelectorAll('.itc-select6__option');

option6.forEach((item) => {
  item.addEventListener('change', () => {
    btn6.textContent = item.textContent;
  });
});
