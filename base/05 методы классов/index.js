// ? Сделайте в вашем классе Employee какой-нибудь тестовый метод. Вызовите его.

class Employee {
  name;
  salary;

  sayHello() {
    return `hello Employee`;
  }
}

const employee1 = new Employee();
const employee2 = new Employee();
const employee3 = new Employee();

employee1.name = 'apsi';
employee1.salary = '2000';

employee2.name = 'pepi';
employee2.salary = '3000';

employee3.name = 'ketty';
employee3.salary = '3500';

console.log(employee1);
console.log(employee2);
console.log(employee3);

console.log(employee1.sayHello());
