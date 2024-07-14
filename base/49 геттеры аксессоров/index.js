class User {
  #name;

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }
}

const user = new User('pepi');
console.log(user.name);
