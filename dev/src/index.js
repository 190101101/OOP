class Car {
  color;
  fuel;

  go() {
    console.log('go');
  }

  turn() {
    console.log('turn');
  }

  stop() {
    console.log('stop');
  }
}

let myCar = new Car();

myCar.color = 'black';
myCar.fuel = 50;

myCar.go();
myCar.turn();
myCar.stop();
console.log(myCar.color);
console.log(myCar.fuel);
