class User {
  #name;

  constructor(name) {
    return (this.#name = name);
  }

  #cape(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  show() {
    return this.#cape(this.#name);
  }
}

const user = new User('pepikus');
console.log(user.show());
