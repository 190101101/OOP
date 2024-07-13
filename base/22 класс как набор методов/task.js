// ? 1 Сделайте класс Validator, который будет выполнять проверку строк на корректность.
// ? 2 Сделайте в вашем классе метод isEmail, проверяющий строку на то, что она корректный email.
// ? 3 Сделайте в вашем классе метод isDomain, проверяющий строку на то, что она корректное имя домена.
// ? 4 Сделайте в вашем классе метод isNumber, проверяющий строку на то, что она содержит только числа.

class Validator {
  #name;
  #email;

  setName(name) {
    this.#name = name;
  }

  setEmail(email) {
    return this.#isDomain(email);
  }

  #isDomain(email) {
    if (email.includes('@')) {
      this.#email = email;
    } else {
      console.log('email is incorrect');
    }
  }

  getInfo() {
    return `name: ${this.#name} email: ${this.#email}`;
  }
}

const validator = new Validator();
validator.setName('pepi');
validator.setEmail('pepi@gmail.com');
console.log(validator.getInfo());
