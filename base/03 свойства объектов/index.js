// ? В объект класса Employee запишите свойства name, age и salary.
// ? Получите данные из записанных свойств и выведите их на экран.

class Employee {
  name;
  age;
  salary;
}

const employee = new Employee();
employee.name = 'apsi';
employee.age = '15';
employee.salary = '2000';

console.log(`
name: ${employee.name} 
age: ${employee.age} 
salary: ${employee.salary}
`);
