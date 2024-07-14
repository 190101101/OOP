//? 1 Сделайте класс Rectangle, в котором в свойствах будут записаны ширина и высота прямоугольника.
//? 2 В классе Rectangle сделайте метод getSquare, который будет возвращать площадь этого прямоугольника.
//? 3 В классе Rectangle сделайте метод getPerimeter, который будет возвращать периметр этого прямоугольника.
//? 4 В классе Rectangle сделайте метод getRatio, который будет возращать площадь, деленную на периметр.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getSquare() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width * this.height);
  }

  getRatio() {
    const square = this.getSquare();
    const perimeter = this.getPerimeter();
    return square / perimeter;
  }
}

const rectangle = new Rectangle(1, 5);
console.log(rectangle.getRatio());
