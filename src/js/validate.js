/*
const inputTel = document.querySelector('.form__input-phone');
const telMask = new Inputmask('+7 (999)-999-99-99');

telMask.mask(inputTel);

const formTitle = document.querySelector('.feedback__title');
const modalFieldset = document.querySelector('.form__fieldset');
const justValidate = new JustValidate('.form');

justValidate
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
        mail: target.mail.value,
        phone: target.phone.value,
      })
      .then((response) => {
        target.reset();
        // modalFieldset.disabled = true;
        formTitle.textContent = `Спасибо ваша заявка принята, номер заявки ${response.data.id}!`;
      })
      .catch((err) => {
        console.error(err);
        target.reset();
        // modalFieldset.disabled = false;
        formTitle.textContent = 'Что-то пошло не так, попробуйте позже!';
      });
  });
*/
