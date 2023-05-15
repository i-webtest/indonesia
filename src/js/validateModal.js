/*
const inputPhone = document.querySelector('.form__input-phone__modal');
const phoneMask = new Inputmask('+7 (999)-999-99-99');

phoneMask.mask(inputPhone);

const modalTitle = document.querySelector('.modal__title');
const validate = new JustValidate('.form-modal');

validate
  .addField('.form__input-phone__modal', [
    {
      rule: 'required',
      errorMessage: 'Укажите ваш телефон',
    },
    {
      validator(value) {
        const phone = inputPhone.inputmask.unmaskedvalue();
        return !!(Number(phone) && phone.length === 10);
      },
      errorMessage: 'Укажите корректный номер',
    },
  ])
  .addField('.form__input-mail__modal', [
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
        modalTitle.textContent = `Спасибо ваша заявка принята, номер заявки ${response.data.id}!`;
      })
      .catch((err) => {
        console.error(err);
        target.reset();
        // modalFieldset.disabled = false;
        modalTitle.textContent = 'Что-то пошло не так, попробуйте позже!';
      });
  });
*/
