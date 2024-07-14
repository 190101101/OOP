class User {
  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Student extends User {
  setName(name) {
    if (name.length > 0) {
      this.name = name;
    } else {
      throw new Error('student name error');
    }
  }

  setYear(year) {
    this.year = year;
  }

  getYear() {
    return this.year;
  }
}

const student = new Student();
student.setName('pepikus');
student.setYear(2023);
console.log(student.getName());
console.log(student.getYear());
