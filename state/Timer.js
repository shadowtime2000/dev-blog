import { makeObservable, observable, action } from "mobx";

class Timer {
  secondsPassed = 0;

  constructor() {
    makeObservable(this, {
      secondsPassed: observable,
      increment: action,
    });
  }

  increment() {
    this.secondsPassed++;
    if (this.secondsPassed > 10) {
      this.secondsPassed = 0;
    }
  }
}

export default Timer;
