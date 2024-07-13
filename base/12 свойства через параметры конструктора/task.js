// ? Передайте в конструктор класса Employee имя и зарплату работника и запишите их в соответствующие свойства.
// ? Сделайте метод, который будет выводить имя работника.
// ? Сделайте метод, который будет выводить зарплату работника.
// ? Сделайте метод, который будет увеличивать зарплату работника на 10%.

class Employee {
  name;
  salary;

  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getName() {
    return this.name;
  }

  getSalary() {
    return this.salary;
  }

  addPercentToSalary(percent) {
    this.salary += (this.salary * percent) / 100;
    return this.salary;
  }
}

const employee = new Employee('apsi', 2000);
console.log(employee.getName());
console.log(employee.getSalary());
console.log(employee.addPercentToSalary(10));
console.log(employee.getSalary());
