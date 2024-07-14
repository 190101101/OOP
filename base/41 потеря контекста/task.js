class Employee {
  name;
  salary;
  coffees;

  constructor(name, salary, coffees) {
    this.name = name;
    this.salary = salary;
    this.coffees = coffees;
  }

  getTotal() {
    return this.coffees.reduce((res, coffee) => {
      return res + this.salary * coffee;
    }, 0);
  }
}

let employee = new Employee('john', 1000, [1.1, 1.2, 1.3]);
let total = employee.getTotal();
console.log(total);
