class User {
  #name;

  set name(name) {
    this.#name = name;
  }
  get name() {
    return this.#name;
  }
}

const user = new User();
user.name = 'pepi';
// user.name('pepi'); error
console.log(user.name);
