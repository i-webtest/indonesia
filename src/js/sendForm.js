const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const formTitle = document.querySelector('.form__title');

  const labelDate = document.querySelector('.form__label-date');
  const labelPeople = document.querySelector('.form__label-people');
  const labelOption = document.querySelector('.form__label-option');

  const labelName = document.querySelector('.form__label-name');
  const labelMail = document.querySelector('.form__label-mail');
  const labelPhone = document.querySelector('.form__label-phone');

  const loadText = 'Загрузка...';
  const errorText = 'Ошибка...';
  const successText = 'Спасибо! Наш менеджер с вами свяжется!';
  const textError = 'Попробуйте ещё раз...';

  labelDate.style.border = null;
  labelPeople.style.border = null;
  labelOption.style.border = null;
  labelName.style.border = null;
  labelMail.style.border = null;
  labelPhone.style.border = null;

  const validate = (list) => {
    let success = true;

    list.forEach((item) => {
      item.style.border = null;

      if (item.name === 'name') {
        if (item.value.length < 2) {
          labelName.style.border = '1px solid red';
          success = false;
        }
      } else if (item.name === 'mail') {
        if (item.value.length === 0) {
          labelMail.style.border = '1px solid red';
          success = false;
        }
      } else if (item.name === 'phone') {
        if (item.value.length < 18 || item.value.length > 18) {
          labelPhone.style.border = '1px solid red';
          success = false;
        }
      } else {
        success = true;
      }
    });

    return success;
  };

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    formTitle.textContent = loadText;

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          formTitle.textContent = successText;

          formElements.forEach((input) => {
            input.value = '';
          });
          setInterval(() => {
            formTitle.textContent = 'Бронирование тура';
          }, 3000);
        })
        .catch((error) => {
          formTitle.textContent = errorText;
        });
    } else {
      formTitle.textContent = textError;

      setTimeout(() => {
        formTitle.textContent = 'Бронирование тура';
      }, 2000);
    }
  };

  try {
    if (!form) {
      throw new Error('Верните форму на место!');
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      submitForm();
    });
  } catch (error) {
    // console.log(error.message);
  }
};

sendForm({
  formId: 'form',
});
