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

  set full(full) {
    [this.name, this.surn] = full.split(' ');
  }
}

const user = new User('pepikus', 'pepi');
console.log(user.full);
user.full = 'pepi pepikus';
console.log(user.full);
