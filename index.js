import { App } from './app';

import './style.scss';

const app = new App();

app.start();


function clockwork() {
  const hoursArrow = document.querySelector('.arrow--hour');
  const minutesArrow = document.querySelector('.arrow--min');
  const secondsArrow = document.querySelector('.arrow--sec');
  const deg = 6;

  setInterval(() => {
    const day = new Date();

    const hours = day.getHours() * 30;
    const minutes = day.getMinutes() * deg;
    const seconds = day.getSeconds() * deg;

    hoursArrow.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`;
    minutesArrow.style.transform = `rotateZ(${minutes}deg)`;
    secondsArrow.style.transform = `rotateZ(${seconds}deg)`;
  }, 0);
}
clockwork();
