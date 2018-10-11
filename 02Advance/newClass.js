// 1st letter of any class should be Uppercase (not compulsarry)
class User {
  constructor(firstname,lastname, credit) {
    this.first = firstname
    this.last = lastname
    this.credit = credit
  }
  // new method user defined
// inside of the Class we no need to write the function keyword before the function name

    fullName(){
      let fullName = `${this.first} ${this.last} is my full name.`
      return fullName;
    }
    editname(newName){
      const myName = newName.split(' ');
      this.first = myName[0]
      this.last = myName[1]
    }


}
const john = new User('John',"Datta",36)
const sammy = new User("Sammy","Paul",23)

john.editname('Johny Man')
console.log(sammy.fullName());

console.log(john.fullName());
