class User {
  setName(name) {
    this._name = name;
  }

  getName() {
    return this._name;
  }
}

class Student extends User {
  setYear(year) {
    this._year = year;
  }

  getYear() {
    return this._year;
  }
}

class StudentProgrammer extends Student {
  setSkill(skill) {
    this._skill = skill;
  }

  getSkill() {
    return this._skill;
  }
}

const sp = new StudentProgrammer();
sp.setSkill('js');
console.log(sp.getSkill());
