import Clock from './components/clock/clock';

export class App {
  start() {
    const clockElement = Clock.show();

    console.log(clockElement);

    document.body.append(clockElement);
  }
}
