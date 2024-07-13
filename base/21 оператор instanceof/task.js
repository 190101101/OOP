class User {
  name;
  constructor(name) {
    this.name = name;
  }
}

class Student {
  name;
  constructor(name) {
    this.name = name;
  }
}

class Employee {
  name;
  constructor(name) {
    this.name = name;
  }
}

let users = [
  new User('user1'),
  new Employee('user2'),
  new Student('user3'),
  new User('user4'),
  new Employee('user5'),
  new Student('user6'),
];

users.forEach((user) => {
  console.log('username: ' + user.name);
});
