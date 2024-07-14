class User {
  name() {
    console.log('method');
  }
}

let user = new User();
user.name();

user.name = 'str';
// user.name(); //error
