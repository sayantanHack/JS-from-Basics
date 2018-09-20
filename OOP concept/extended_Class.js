'use strict'; // strict code
// this is the typical class
class  User{
  constructor(username, email, password){ //its constructor
    this.userName = username;
    this.email = email;
    this.password = password;
  }
// lets create a static method
  static countUser(){
      console.log("There have 50 users");
  }

  registered(){    // its a method
    console.log(this.userName+" is now registered.");
  }
}

class Member extends User{
  constructor(username, email, password, numberPackage){
    super(username, email,password);
    this.package = numberPackage;
  }

  getPackage(){
    console.log(this.userName+'is subscribed to the '+this.package + 'package');

  }
}

let Mike = new Member("Mike",'mike@email.com','1234', 'Standard');
Mike.getPackage();
Mike.registered(); // ading the method of the another class
