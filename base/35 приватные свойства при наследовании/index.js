class User {
  #name;
  #surn;

  setName(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  setSurn(surn) {
    this.#surn = surn;
  }

  getSurn() {
    return this.#surn;
  }

  getFull() {
    return `${this.#name} ${this.#surn}`;
  }
}

class Student extends User {}

const student = new Student();
student.setName('pepi');
student.setSurn('pepikus');
console.log(student.getFull());
