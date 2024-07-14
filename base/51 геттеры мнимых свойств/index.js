class User {
  #name;
  #surn;

  constructor(name, surn) {
    this.name = name;
    this.surn = surn;
  }

  get full() {
    return this.name + ' ' + this.surn;
  }
}

const user = new User('pepikus', 'pepi');
console.log(user.full);
