class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.#capeFirst(this.name);
  }

  #capeFirst(str) {
    return str[0].toLowerCase() + str.slice(1);
  }
}

class Student extends User {
  setSurn(surn) {
    this.surn = surn;
  }

  getSurn() {
    // return this.#capeFirst(this.surn); //error need protected
    return this.surn;
  }
}
