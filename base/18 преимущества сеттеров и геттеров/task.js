//? В классе Employee в сеттере возраста сделайте проверку на то, что возраст должен быть от 0 до 120.
//? В классе Employee в геттере зарплаты сделайте так, чтобы при чтении зарплаты в конец ее значения добавлялся знак доллара.

class User {
  #age;

  setAge(age) {
    if (age > 0 && age < 120) {
      this.#age = age;
    } else {
      throw new Error('age is incorrect');
    }
  }

  getAge() {
    return this.#age;
  }
}

const user = new User();

user.setAge(0);
console.log(user.getAge());
