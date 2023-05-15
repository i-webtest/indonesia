const itemMonth = document.querySelectorAll('.calendar__item_month');
const calendarDate = document.querySelectorAll('.calendar__date');

const changeDate = (arr, value) => {
  arr.forEach((elem) => {
    if (elem.dataset.field === value) {
      elem.style.display = 'flex';
    } else {
      elem.style.display = 'none';
    }
  });
};

itemMonth.forEach((month) => {
  month.addEventListener('mouseenter', (event) => {
    const dataValue = month.dataset.handler;

    month.style.cssText = 'color: #FCB500; font-size: 16px;';
    changeDate(calendarDate, dataValue);
  });

  month.addEventListener('mouseleave', (event) => {
    month.style.cssText = '';
  });
});

// calendarDate.forEach((date) => {
//   date.addEventListener('mouseenter', () => {
//     date.style.cssText = 'font-size: 16px;';
//   });
// });
