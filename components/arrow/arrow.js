export const arrowTypes = {
  min: 'min',
  sec: 'sec',
  hour: 'hour',
};

const BASE_CLASS = 'arrow';

const typeToCssModifier = {
  [arrowTypes.min]: `${BASE_CLASS}--min`,
  [arrowTypes.sec]: `${BASE_CLASS}--sec`,
  [arrowTypes.hour]: `${BASE_CLASS}--hour`,
};

class Arrow {
  // eslint-disable-next-line class-methods-use-this
  #createElement(type) {
    const element = document.createElement('div');
    const cssModifier = typeToCssModifier[type];

    element.classList.add(BASE_CLASS, cssModifier);

    return element;
  }

  getArrow(type) {
    const arrowType = arrowTypes[type];

    if (!arrowType) {
      throw Error(`Unknown type: ${type}`);
    }

    return this.#createElement(arrowType);
  }
}

export const ArrowFactory = new Arrow();
