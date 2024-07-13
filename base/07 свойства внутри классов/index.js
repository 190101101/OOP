// ? В объект класса Employee запишите свойства name и salary.
// ? Сделайте метод, который выведет на экран имя работника.
// ? Сделайте метод, который выведет на экран зарплату работника.

class Employee {
  name;
  salary;

  getName() {
    return this.name;
  }

  getSalary() {
    return this.salary;
  }
}

const employee = new Employee();
employee.name = 'apsi';
employee.salary = '2000';

console.log(employee.getName());
console.log(employee.getSalary());
