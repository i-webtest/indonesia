const burger = document.querySelector('.header__menu-btn');
const menu = document.querySelector('.navigation');
const menuLinks = document.querySelectorAll('.navigation__link');
const body = document.querySelector('body');

const toggleClass = () => {
  menu.classList.toggle('navigation__active');
  body.classList.toggle('lock');
};

const deleteClass = () => {
  if (menu.classList.contains('navigation__active')) {
    menu.classList.remove('navigation__active');
    body.classList.remove('lock');
  }
};

burger.addEventListener('click', toggleClass);

menuLinks.forEach((link) => {
  link.addEventListener('click', toggleClass);
});

document.addEventListener('click', (e) => {
  const target = e.target;

  if (!target.closest('.navigation') && !target.closest('.header__menu-btn')) {
    deleteClass();
  }
});

document.addEventListener('keyup', (e) => {
  if (e.key == 'Escape') {
    deleteClass();
  }
});
