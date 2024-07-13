class City {
  name;

  constructor(name) {
    this.name = name;
  }
}

class User {
  name;
  surn;
  city;

  constructor(name, surn, city) {
    this.name = name;
    this.surn = surn;
    this.city = city;
  }
}

const city = new City('baki');
const user = new User('pepi', 'pepikus', city);

console.log(user.name);
console.log(user.city.name);
