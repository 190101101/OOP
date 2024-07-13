class User {
  #name;
  #surn;

  setName(name) {
    if (name.length > 0) {
      this.#name = name;
    } else {
      throw new Error('name is incorrect');
    }
  }

  setSurn(surn) {
    if (surn.length > 0) {
      this.#surn = surn;
    } else {
      throw new Error('surn is incorrect');
    }
  }

  getName() {
    return this.#name;
  }

  getSurn() {
    return this.#surn;
  }
}

const user = new User();

user.setName('pepi');
user.setSurn('pepikus');

console.log(user.getName());
console.log(user.getSurn());
