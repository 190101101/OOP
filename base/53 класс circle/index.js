//? 1 Сделайте класс Circle, который будет описывать круг.
//? 2 Передайте в параметр конструктора радиус круга. Запишите его в приватное свойство.
//? 3 Сделайте метод, который будет возвращать площадь круга.
//? 4 Сделайте метод, который будет возвращать длину окружности.

class Circle {
  #radius;

  constructor(radius) {
    this.#radius = radius;
  }

  getSquare() {
    return Math.PI * this.#radius;
  }
}

const circle = new Circle(10);
console.log(circle.getSquare());
