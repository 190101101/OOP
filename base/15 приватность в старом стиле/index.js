class User {
  _name;

  constructor(name) {
    this._name = name;
  }

  show() {
    return this._name;
  }
}

const user = new User('pepi');
console.log(user.show());
console.log(user._user); // undefined
