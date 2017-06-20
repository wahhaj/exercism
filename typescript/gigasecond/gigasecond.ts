export default class Gigasecond {
  birthday: Date

  constructor(birthday: Date) {
    this.birthday = birthday
  }

  date(): Date {
    // getTime() returns milliseconds so we add 10^12 intead of 10^9
    return new Date(this.birthday.getTime() + 10 ** 12)
  }
}
