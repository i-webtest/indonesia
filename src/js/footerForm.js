const footerForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);

  const footerInput = document.querySelector('.footer__form-input');
  const footerInputPlaceholder = document.querySelector('.footer__form-input[placeholder]');

  const loadText = 'Загрузка...';
  const errorText = 'Ошибка...';
  const successText = 'Спасибо! Наш менеджер с вами свяжется!';
  const textError = 'Попробуйте ещё раз...';

  const validate = (list) => {
    let success = true;

    list.forEach((item) => {
      item.style.color = null;
      item.style.borderBottom = null;

      if (item.name === 'email') {
        if (item.value.length === 0) {
          footerInputPlaceholder.style.color = 'red';
          footerInput.style.borderBottom = '1px solid red';
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

    footerInputPlaceholder.textContent = loadText;

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          footerInputPlaceholder.textContent = successText;

          formElements.forEach((input) => {
            input.value = '';
          });
          setInterval(() => {
            footerInputPlaceholder.textContent = 'Бронирование тура';
          }, 3000);
        })
        .catch((error) => {
          footerInputPlaceholder.textContent = errorText;
        });
    } else {
      footerInputPlaceholder.textContent = textError;

      setTimeout(() => {
        footerInputPlaceholder.textContent = 'Бронирование тура';
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

footerForm({
  formId: 'form1',
});
