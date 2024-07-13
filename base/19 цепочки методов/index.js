class User {
  #name;
  #surn;

  setName(name) {
    this.#name = name;
    return this;
  }

  setSurn(surn) {
    this.#surn = surn;
    return this;
  }

  getName() {
    return this.#name;
  }

  getSurn() {
    return this.#surn;
  }
}

let user = new User();

user.setName('cookie').setSurn('cookies');

console.log(user.getName());
console.log(user.getSurn());
