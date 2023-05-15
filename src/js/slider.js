const width = document.documentElement.clientWidth;

const aboutSlider = document.querySelector('.about__slider');
const aboutSliderWrapper = document.querySelector('.about__slider-wrapper');
const aboutSlide = document.querySelectorAll('.about__slide');

if (width <= 767) {
  aboutSlider.classList.add('swiper1');
  aboutSliderWrapper.classList.add('swiper-wrapper');
  aboutSlide.forEach((slide) => {
    slide.classList.add('swiper-slide');
  });
}

new Swiper('.swiper1', {
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  sliderPerView: 1,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

new Swiper('.swiper', {
  slidesPerView: 'auto',
  keyboard: {
    enabled: true,
  },

  navigation: {
    nextEl: '.photo__slider-button_next',
    prevEl: '.photo__slider-button_prev',
  },
});
