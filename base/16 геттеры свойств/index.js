// В классе Employee сделайте три приватных свойства: имя, зарплату и возраст.
// Передайте параметром конструктора значения этих свойств.
// Сделайте геттеры, выводящие значения каждого из наших свойств.

class Employee {
  #name;
  #salary;
  #age;

  constructor(name, salary, age) {
    this.#name = name;
    this.#salary = salary;
    this.#age = age;
  }

  getName() {
    return this.#name;
  }

  getSalary() {
    return this.#salary;
  }

  getAge() {
    return this.#age;
  }
}

const employee = new Employee('pepi', 2000, 1);
console.log(employee.getName());
console.log(employee.getSalary());
console.log(employee.getAge());
