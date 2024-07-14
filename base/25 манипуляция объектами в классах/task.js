// ? 1 Сделайте класс EmployeesCollection, который будет содержать массив работников.
// ? 2 Сделайте в этом классе метод для добавления нового работника.
// ? 3 Сделайте в этом классе метод для вывода всех работников.
// ? 4 Сделайте в этом классе метод для расчета суммарной зарплаты всех работников.
// ? 5 Сделайте в этом классе метод для расчета средней зарплаты всех работников.

class Employee {
  #name;
  #salary;

  constructor(name, salary) {
    this.#name = name;
    this.#salary = salary;
  }

  getName() {
    return this.#name;
  }

  getSalary() {
    return this.#salary;
  }
}

class EmployeesCollection {
  #employees;

  constructor() {
    this.#employees = [];
  }

  add(employee) {
    this.#employees.push(employee);
  }

  show() {
    for (let employee of this.#employees) {
      console.log(
        `name: ${employee.getName()} salary: ${employee.getSalary()}`
      );
    }
  }

  getTotalSalary() {
    let salarys = 0;
    for (let employee of this.#employees) {
      salarys += Number(employee.getSalary());
    }
    return salarys;
  }

  getAvgSalary() {
    let salary = 0;
    for (let i = 0; i < this.#employees.length; i++) {
      salary += Number(this.#employees[i].getSalary());
    }

    return salary / this.#employees.length;
  }
}

const ec = new EmployeesCollection();
ec.add(new Employee('pepi', 2000));
ec.add(new Employee('ququsi', 1500));
ec.add(new Employee('ketty', 2500));
ec.add(new Employee('kikusi', 2500));

ec.show();
console.log('total salary employess: ' + ec.getTotalSalary());
console.log('avg salary employess: ' + ec.getAvgSalary());
