class User {
  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Student extends User {
  setYear(year) {
    this.year = year;
  }

  getYear() {
    return this.year;
  }
}

const student = new Student();
student.setName('apsi');
student.setYear(2009);
console.log(student.getName());
console.log(student.getYear());
