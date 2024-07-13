//? Сделайте конструктор класса Employee.

class Employee {
  name = 'apsi';
  surname = 'apsikus';

  constructor() {
    return this.name + '' + this.surname;
  }
}

let employee = new Employee();
console.log(employee);
