//? Передайте в конструктор класса Employee имя и зарплату работника.

class Employee {
  constructor(name, salary) {
    console.log(name + ' ' + salary);
  }
}

new Employee('pepi', 1000);
