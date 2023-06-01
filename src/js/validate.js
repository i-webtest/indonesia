/*
const inputTel = document.querySelector('.form__input-phone');
const telMask = new Inputmask('+7 (999)-999-99-99');

telMask.mask(inputTel);

const formTitle = document.querySelector('.form__title');
const formFieldset = document.querySelector('.form__fieldset');
const justValidate = new JustValidate('.form');

justValidate
  .addField('#select-4 .itc-select__toggle', [
    {
      rule: 'required',
      errorMessage: 'Выберите дату путешествия',
    },
  ])
  .addField('#select-5 .itc-select5__toggle', [
    {
      rule: 'required',
      errorMessage: 'Укажите количество человек',
    },
  ])
  // .addRequiredGroup('#select-6 .itc-select6__options', 'Выберите нужные опции')
  .addField('.form__input-name', [
    {
      rule: 'required',
      errorMessage: 'Введите ваше имя',
    },
  ])
  .addField('.form__input-phone', [
    {
      rule: 'required',
      errorMessage: 'Укажите ваш телефон',
    },
    {
      validator(value) {
        const phone = inputTel.inputmask.unmaskedvalue();
        return !!(Number(phone) && phone.length === 10);
      },
      errorMessage: 'Укажите корректный номер',
    },
  ])
  .addField('.form__input-mail', [
    {
      rule: 'required',
      errorMessage: 'Укажите ваш E-mail',
    },
  ])
  .onSuccess((event) => {
    const target = event.target;
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        date: target.date.value,
        people: Number(target.people.value),
        // option: target.option.value,
        name: target.name.value,
        mail: target.mail.value,
        phone: target.phone.value,
      })
      .then((response) => {
        target.reset();
        formFieldset.disabled = true;
        formTitle.textContent = `Спасибо ваша заявка принята, номер заявки ${response.data.id}!`;
      })
      .catch((err) => {
        console.error(err);
        target.reset();
        formFieldset.disabled = false;
        formTitle.textContent = 'Что-то пошло не так, попробуйте позже!';
      });
  });
*/
