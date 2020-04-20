// @flow

interface Loggable {
  log(level: string): string
}
// Имплементация метода интерфейса
class Hello implements Loggable {
  log(level: string) {
    return level;
  }
}
const x: Hello = new Hello();
const p: Loggable = x;
const r: Loggable = {
  log(level: string) {
    return level;
  }
}