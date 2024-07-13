//? В следующем коде сделайте вспомогательный метод приватным:

class Employee {
  name;
  salary;

  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getSalary() {
    return this.#addSign(this.salary);
  }

  #addSign(num) {
    return num + '$';
  }
}

const employee = new Employee('pepi', 2000);
console.log(employee.getSalary());
