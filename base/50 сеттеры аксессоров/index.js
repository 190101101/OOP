class User {
  #name;

  set name(name) {
    if (name.length > 0) {
      this.#name = name;
    } else {
      throw new Error('name is incorrect');
    }
  }

  get name() {
    return this.#name;
  }
}

const user = new User();
user.name = 'pepi';
console.log(user.name);
