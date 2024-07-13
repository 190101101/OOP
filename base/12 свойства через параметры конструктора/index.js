class User {
  name;
  surn;

  constructor(name, surn) {
    this.name = name;
    this.surn = surn;
  }

  show() {
    return this.name + ' ' + this.surn;
  }
}

const user = new User('pepi', 'pepikus');
console.log(user.show());
