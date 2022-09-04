// commonjs
//const flatpickr = require('flatpickr');
// es modules are recommended, if available, especially for typescript
// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  inputElem: document.querySelector('input#datetime-picker'),
  startElem: document.querySelector('button[data-start]'),
  daysElem: document.querySelector('span[data-days]'),
  hoursElem: document.querySelector('span[data-hours]'),
  minutesElem: document.querySelector('span[data-minutes]'),
  secondsElem: document.querySelector('span[data-seconds]'),
};
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    refs.startElem.disabled = false;
  },
};

const fp = flatpickr(refs.inputElem, options);
console.log(fp);

refs.startElem.disabled = true;

console.log(options.defaultDate);

refs.startElem.addEventListener('click', () => {
  refs.startElem.disabled = true;
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

//console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
