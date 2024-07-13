// ? Передайте в ваш тестовый метод имя и зарплату работника.

class User {
  name;
  surname;

  getInfo(name, surname) {
    return `name: ${name} surname:${surname}`;
  }
}

const user = new User();
console.log(user.getInfo('apsi', 'apsikus'));
