const description = document.querySelectorAll('.travel__item-text');
const btns = document.querySelectorAll('.travel__item-title');

btns.forEach((btnItem, index) => {
  btnItem.addEventListener('click', () => {
    btns.forEach((btnItem) => {
      btnItem.classList.remove('active');
    });

    btnItem.classList.add('active');

    description.forEach((listItem) => {
      listItem.classList.add('hidden');
    });

    description[index].classList.remove('hidden');
  });
});
