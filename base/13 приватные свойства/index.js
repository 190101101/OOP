// В классе Employee сделайте три приватных свойства: имя, зарплату и возраст.
// Передайте параметром конструктора значения этих свойств.
// Сделайте метод, который выведет данные работника.

class Employee {
  #name;
  #salary;
  #age;

  constructor(name, salary, age) {
    this.name = name;
    this.salary = salary;
    this.age = age;
  }

  getInfo() {
    return `${this.name} ${this.salary} ${this.age}`;
  }
}

const employee = new Employee('pepi', 3000, 1);
//
console.log(employee.getInfo());
