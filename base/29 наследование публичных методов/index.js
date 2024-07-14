class User {
  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Student extends User {}

const student = new Student();
student.setName('apsi');
console.log(student.getName());
