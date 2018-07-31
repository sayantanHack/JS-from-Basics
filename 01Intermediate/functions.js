// ALL about functions

/* Important note : ------ Difference between Parameter and Argument  -------
    Parameter : When a function is initializing something into it , then its called parameter .
    Arguement : When a function is called and the values are passed while calling is call arguement .
    For example :
     function Name(parameter){ function blocks}
     Name(arguement);
*/

// The bellow sayaHello is a fucntion decleration
let sayHello = function(para) {
  console.log(".......Getting from user");
  console.log(`Hey ${para}!!!\n`);  // para means parameter
}

//calling functions
sayHello('John');

//  ---------- 2ND FUNCTION -------------

let fullNameMaker = function(fName , lName) {
    console.log('Welcome to our code ...');
    console.log(`Happy to have you, ${fName} ${lName}!!!`);
}

fullNameMaker('John' , 'Cena');

// ----------- 3RD FUNCTION in int or float  ---------------

let sumVal = function(num1 , num2){
  let added = num1 + num2;
  console.log(`Hey The sum is ${added} .`);
  // or
  return added;
}

// if you wanna return this you should have to print(I mean console.log) the returned item.
sumVal(3,5.9);
console.log(sumVal(2,3.6));

// you can store it into a variable too like...
let result= sumVal(2,5);
console.log(result);
