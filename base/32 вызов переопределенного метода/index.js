class User {
  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setAge(age) {
    if (age > 0) {
      this.age = age;
    } else {
      throw new Error('need age more 1');
    }
  }

  getAge() {
    return this.age;
  }
}

class Student extends User {
  setName(name) {
    if (name.length > 0) {
      this.name = name;
      super.setName(name);
    } else {
      throw new Error('student name error');
    }
  }

  setAge(age) {
    if (age < 120) {
      if (age > 0) {
        this.age = age;
      } else {
        throw new Error('need age more 0');
      }
    } else {
      throw new Error('need age less 120');
    }
  }
}

const student = new Student();
student.setName('pepikus');
student.setAge(55);
console.log(student.getName());
console.log(student.getAge());
