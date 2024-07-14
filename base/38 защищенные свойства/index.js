class User {
  _age;

  setAge(age) {
    this._age = age;
  }

  getAge() {
    return this._age;
  }
}

class Student extends User {
  incAge() {
    this._age++;
  }
}

const student = new Student();
student.setAge(10);
console.log(student.getAge());
student.incAge();
console.log(student.getAge());
