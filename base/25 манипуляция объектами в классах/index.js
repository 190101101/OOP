class User {
  #name;

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

class UsersCollection {
  #users;

  constructor() {
    this.#users = [];
  }

  add(user) {
    this.#users.push(user);
  }

  show() {
    for (let user of this.#users) {
      console.log(user.getName());
    }
  }
}

let uc = new UsersCollection();

uc.add(new User('pepi'));
uc.add(new User('ququsi'));
uc.add(new User('ketty'));

uc.show();
