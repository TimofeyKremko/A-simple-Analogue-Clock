import { ClockFace } from '../clockFace/clockFace';

class Clock {
  constructor(ClockFaceModel) {
    this.clockFace = new ClockFaceModel();
  }

  show() {
    return this.clockFace.getClockFace();
  }
}

export default new Clock(ClockFace);
