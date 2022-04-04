import { ArrowFactory, arrowTypes } from '../arrow/arrow';
import { NumberFactory } from '../number/number';

const BASE_CLASS = 'clock-face';

export class ClockFace {
  #availableNumbers = [12, 3, 6, 9];

  constructor() {
    this.arrows = this.#getArrows();
    this.numbers = this.#getNumbers(this.#availableNumbers);
  }

  #getArrows() {
    const minArrow = ArrowFactory.getArrow(arrowTypes.min);
    minArrow.classList.add(`${BASE_CLASS}__arrow`);

    const secArrow = ArrowFactory.getArrow(arrowTypes.sec);
    secArrow.classList.add(`${BASE_CLASS}__arrow`);

    const hourArrow = ArrowFactory.getArrow(arrowTypes.hour);
    hourArrow.classList.add(`${BASE_CLASS}__arrow`);

    return {
      min: minArrow,
      sec: secArrow,
      hour: hourArrow,
    };
  }

  #getNumbers(availableNumbers) {
    return availableNumbers.map(numberValue => {
      const numberElement = NumberFactory.getNumber(numberValue);
      numberElement.classList.add(`${BASE_CLASS}__number`, `${BASE_CLASS}__number--${numberValue}`);

      return numberElement;
    });
  }

  #createElement() {
    const element = document.createElement('div');
    element.classList.add(BASE_CLASS);

    const arrowWrapper = document.createElement('div');
    arrowWrapper.classList.add(`${BASE_CLASS}__arrow-wrapper`);

    const { min, sec, hour } = this.arrows;
    arrowWrapper.append(min, sec, hour);

    const numbersWrapper = document.createElement('div');
    numbersWrapper.classList.add(`${BASE_CLASS}__numbers-wrapper`);

    numbersWrapper.append(...this.numbers);

    element.append(arrowWrapper, numbersWrapper);

    return element;
  }

  getClockFace() {
    return this.#createElement();
  }
}
