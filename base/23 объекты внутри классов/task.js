//? 1 Сделайте так, чтобы во второй и третий параметры передавались объекты отдельных классов.
//? 2 Создайте объект с работником с помощью класса из предыдущей задачи.
//? 3 Выведите в консоль имя, должность и отдел для созданного работника.

class Position {
  name;

  constructor(name) {
    this.name = name;
  }
}

class Department {
  name;

  constructor(name) {
    this.name = name;
  }
}

class Employee {
  constructor(name, position, department) {
    this.name = name;
    this.position = position;
    this.department = department;
  }
}

const position = new Position('software engineer');
const department = new Department('paper st');
const employee = new Employee('pepi', position, department);

console.log('name:', employee.name);
console.log('position:', employee.position.name);
console.log('department:', employee.department.name);
