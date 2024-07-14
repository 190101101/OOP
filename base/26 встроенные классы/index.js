let date = new Date();
console.log(date);

let reg = new RegExp();
console.log(reg);
console.dir(reg);
console.dir(reg instanceof RegExp);

let arr = [1, 2, 3];
console.log(arr);
console.dir(arr);
console.dir(arr instanceof Array);

let arr2 = new Array(1, 2, 3);
console.log(arr2);
console.dir(arr2);
console.dir(arr2 instanceof Array);

let obj = { a: 1, b: 2, c: 3 };
console.log(obj);
console.dir(obj);
console.dir(obj instanceof Object);

let obj2 = new Object();
console.log(obj2);
console.dir(obj2 instanceof Object);
