class User {
  name;

  constructor(name) {
    this.name = name;
  }
}

let user1 = new User('cookie');
let user2 = new User('apsi');

console.log(user1 === user1);
console.log(user1 === user2);
