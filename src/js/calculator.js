// const formLabel = document.querySelectorAll('.tour__form-label');
const formLabelDate = document.querySelector('.tour__form-label_date');
const calendar = document.querySelector('.calendar');

formLabelDate.addEventListener('click', () => {
  calendar.style.display = 'block';
});
