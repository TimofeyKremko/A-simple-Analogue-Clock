const BASE_CLASS = 'number';

class ClockNumber {
  #createElement(value) {
    const element = document.createElement('span');
    element.innerText = value;

    element.classList.add(BASE_CLASS);

    return element;
  }

  getNumber(value) {
    return this.#createElement(value);
  }
}

export const NumberFactory = new ClockNumber();
