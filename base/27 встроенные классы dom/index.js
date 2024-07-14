let elem = document.querySelector('p');
console.log(elem);
console.dir(elem);
console.log(elem instanceof HTMLParagraphElement);

let elem2 = document.querySelector('div');
console.log(elem2);
console.dir(elem2);
console.log(elem2 instanceof HTMLParagraphElement);

let elem3 = document.querySelector('input');
console.log(elem3);
console.dir(elem3);
console.log(elem3 instanceof HTMLParagraphElement);

let elem4 = document.querySelectorAll('small');
console.log(elem4);
console.dir(elem4);
console.log(elem4 instanceof HTMLParagraphElement);
