class User {
  name;
  cities;

  constructor(name, cities) {
    this.name = name;
    this.cities = Array.isArray(cities) ? cities : [cities];
  }

  showCities() {
    this.cities.forEach((city) => {
      console.log(this.#cape(city));
    });
  }

  #cape(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
}

const user = new User('pepi', ['baku', 'new york', 'london']);
user.showCities(); // Потеря контекста
