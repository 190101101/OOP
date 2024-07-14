class User {
  setName(name) {
    this.name = name;
  }

  getName() {
    return this._capeFirst(this.name);
  }

  _capeFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  notEmpty(str) {
    return str.length > 0;
  }
}

class Student extends User {
  setSurn(surn) {
    if (this.notEmpty(surn)) {
      this.surn = surn;
    }
  }

  getSurn() {
    return this._capeFirst(this.surn);
  }
}
