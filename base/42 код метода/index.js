class User {
  #name;

  constructor(name) {
    this.#name = name;
  }

  getName(name) {
    return this.#name;
  }
}

const user = new User('cookie');
console.log(user.getName());
