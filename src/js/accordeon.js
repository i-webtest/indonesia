// const accordeon = () => {
//   const accItems = document.querySelectorAll('.travel__item');

//   accItems.forEach((item, index) => {
//     const accButton = item.querySelector('.travel__item-title');
//     const accContent = item.querySelector('.travel__item-text');

//     accButton.addEventListener('click', () => {
//       if (accContent.classList.contains('open')) {
//         accContent.style.height = '';
//       } else {
//         accContent.style.height = accContent.scrollHeight + 'px';
//       }
//       accButton.classList.toggle('active');
//       accContent.classList.toggle('open');
//     });
//   });
// };
// accordeon();

/*
const lists = document.querySelectorAll('.feature-sub');
const btns = document.querySelectorAll('.feature__link');

btns.forEach((btnItem, index) => {
  btnItem.addEventListener('click', () => {
    btns.forEach((btnItem) => {
      btnItem.classList.remove('feature__link_active');
    });

    btnItem.classList.add('feature__link_active');

    lists.forEach((listItem) => {
      listItem.classList.add('hidden');
    });

    lists[index].classList.remove('hidden');
  });
});
*/

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

/*
const accordeon = () => {
  const travelList = document.querySelector('.travel__list');
  const travelItem = document.querySelectorAll('.travel__item');

  const open = (button, dropDown) => {
    closeAllDrops();
    dropDown.style.height = `${dropDown.scrollHeight}px`;
    button.classList.add('active');
    dropDown.classList.add('active');
  };
  const close = (button, dropDown) => {
    button.classList.remove('active');
    dropDown.classList.remove('active');
    dropDown.style.height = '';
  };

  const closeAllDrops = (button, dropDown) => {
    travelItem.forEach((elem) => {
      if (elem.children[0] !== button && elem.children[1] !== dropDown) {
        close(elem.children[0], elem.children[1]);
      }
    });
  };

  travelList.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('travel__item-title')) {
      const parent = target.closest('.travel__item');
      const description = parent.querySelector('.travel__item-text');
      // description.classList.contains("active") & close(target, description) : open(target, description);

      if (description.classList.contains('active')) {
        close(target, description);
      } else {
        open(target, description);
      }
    }
  });
};
accordeon();
*/
