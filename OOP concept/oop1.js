// This is the object oriented Javascript here will be class constructor methods & objects

'use strict'; // strict code
// this is the typical class
class  User{
  constructor(username, email, password){ //its constructor
    this.userName = username;
    this.email = email;
    this.password = password;
  }

  registered(){    // its a method
    console.log(this.userName+" is now registered.");
  }
}

// Now bob is calling the User method using the his name mail & pass
let bob = new User('Bob','bob@email.com','123456');
// bob is calling register method
bob.register();
