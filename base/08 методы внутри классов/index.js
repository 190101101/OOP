class Student {
  name;
  surname;

  cape(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  show() {
    return this.cape(this.name);
  }

  getFirstLetter(str) {
    return str[0].toUpperCase();
  }

  getInfo() {
    return this.getFirstLetter(this.name) + this.getFirstLetter(this.surname);
  }
}

const student = new Student();
student.name = 'apsi';
student.surname = 'apsikus';
console.log(student.show());
console.log(student.getInfo());
