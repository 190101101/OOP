class User {
  #age;

  setAge(age) {
    this.#age = age;
  }

  getAge() {
    return this.#age;
  }
}

class Student extends User {
  incAge() {
    //* this.#age++; error age is private
    //! this.setAge(++this.getAge()); ? why this is error

    let age = this.getAge();
    age++;
    this.setAge(age);
  }
}

const student = new Student();
student.setAge(10);
console.log(student.getAge());
student.incAge();
console.log(student.getAge());
