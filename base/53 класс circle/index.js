//? 1 Сделайте класс Circle, который будет описывать круг.
//? 2 Передайте в параметр конструктора радиус круга. Запишите его в приватное свойство.
//? 3 Сделайте метод, который будет возвращать площадь круга.
//? 4 Сделайте метод, который будет возвращать длину окружности.

class Circle {
  #radius;

  constructor(radius) {
    this.#radius = radius;
  }

  getArea() {
    return Math.PI * Math.pow(this.#radius, 2);
  }

  getCircumference() {
    return 2 * Math.PI * this.#radius;
  }
}

const myCircle = new Circle(5);

console.log('area:', myCircle.getArea());
console.log('Circumference:', myCircle.getCircumference());
