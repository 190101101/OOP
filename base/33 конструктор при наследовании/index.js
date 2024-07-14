class User {
  constructor(name, surn) {
    this.name = name;
    this.surn = surn;
  }

  getName() {
    return this.name;
  }

  getSurn() {
    return this.surn;
  }
}

class Student extends User {
  constructor(name, surn, year) {
    super(name, surn);
    this.year = year;
  }

  getYear() {
    return this.year;
  }
}

const student = new Student('pepi', 'pepikus', 2023);
console.log(student.getName());
console.log(student.getSurn());
console.log(student.getYear());
