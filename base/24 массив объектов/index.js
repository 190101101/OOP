class User {
  #name;

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

let users = [new User('pepi'), new User('ketty'), new User('ququsi')];

for (let user of users) {
  console.log(user.getName());
}
