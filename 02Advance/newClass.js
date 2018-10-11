// 1st letter of any class should be Uppercase (not compulsarry)
class User {
  constructor(firstname,lastname, credit) {
    this.first = firstname
    this.last = lastname
    this.credit = credit
  }
  // new method user defined
// inside of the Class we no need to write the function keyword before the function name

    nofullName(){
      let fullName = `${this.first} ${this.last} is my full name.`
      return fullName;
    }



}
const john = new User('John',"Datta",36)
const sammy = new User("Sammy","Paul",23)

console.log(sammy.nofullName());
