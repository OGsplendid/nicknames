export default class Validator {
  // constructor(username) {
  //   this.username = username;
  //   // this.latinLettersOnly = /{a-z}/;
  //   // this.dashAccepted = /-/;
  //   // this.underscoreAccepted = /_/;
  //   // this.exeptThreeNumbersInRow = !/\d{4,}/;
  // }

  validateUsername(username) {
    this.result = (/[^a-z^A-Z^0-9^_^-]|\d{4,}|^[\d_-]|[\d_-]$/).test(username);
    return !this.result;
  }
}
