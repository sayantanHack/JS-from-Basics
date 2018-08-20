// checking the user name & password ... What you find on web
// for more documentation visit MDN Strings for Javascript
let userEmail = 'John'
let password = '12345'

console.log(`The length is ${password.length}`);

let userChecker = function(myString){
  if(myString.includes(123) && (myString.length > 6)){
    return true;
  }
  else{
    return false
  }
}

console.log(userChecker(userEmail));

let passChecker = function(pass){
  if(pass.includes(123456) && (pass.length > 6)){
    return true;
  }
  else{
    return false
  }
}
