// В классе Employee сделайте три приватных свойства: имя, зарплату и возраст.
// Передайте параметром конструктора значения этих свойств.
// Сделайте геттеры, выводящие значения каждого из наших свойств.

class Employee {
  #name;
  #salary;
  #age;

  setName(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  setSalary(salary) {
    this.#salary = salary;
  }

  getSalary() {
    return this.#salary;
  }

  setAge(age) {
    this.#age = age;
  }

  getAge() {
    return this.#age;
  }
}

const employee = new Employee();
employee.setName('pepi');
employee.setSalary(1000);
employee.setAge(1);

console.log(employee.getName());
console.log(employee.getSalary());
console.log(employee.getAge());
