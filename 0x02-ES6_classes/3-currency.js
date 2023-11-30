export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return _code;
  }

  set code(value) {
    this._code = value;
  }

  get name() {
    return _name;
  }

  set name(value) {
    this._namename = value;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
