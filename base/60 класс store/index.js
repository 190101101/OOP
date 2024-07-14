class Store {
  constructor() {
    this.data = {};
  }

  set(key, value) {
    this.data[key] = value;
  }

  get(key) {
    return this.data[key];
  }
}

let store = new Store();
store.set('key', { a: 1, b: 2, c: 3 });

console.log(store.get('key'));

let res = store.get('key');
console.log(res); // {a: 1, b: 2, c: 3}

let res2 = store.get('key.a');
console.log(res2); // 1

let res3 = store.get('key.b');
console.log(res3); // 2
