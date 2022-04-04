import { App } from './app';

import './style.scss';

const app = new App();

app.start();


setInterval(() => {
  const deg = 6;
  const secArrow = document.querySelector('.arrow--sec');
  const minArrow = document.querySelector('.arrow--min');
  const hourArrow = document.querySelector('.arrow--hour');

  const day = new Date();

  const seconds = day.getSeconds() * deg;
  const minutes = day.getMinutes() * deg;
  const hours = day.getHours() * 30;
  secArrow.style.transform = `rotate(${seconds}deg)`;
  minArrow.style.transform = `rotate(${minutes}deg)`;
  hourArrow.style.transform = `rotate(${(hours) + (minutes / 12)}deg)`;
});
