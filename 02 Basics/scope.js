// let vs var vs const
// The sccope means area of the variable .Two types of variable are there LOCAL and GLOBAL .
//Locals are stay inside in a particular block of code like functions or class .Local is not accessible outside of the block.
//But Glovals are the variable stay out side of the function .can freely roam arround in an functions or any branch of code


let iamGlobal = 'some value'
if (true){
  let iamLocal = 'more value'
  iamGlobal = 'local value of Global'
  console.log(iamLocal);
  console.log(iamGlobal);
}

console.log(iamGlobal);

//uncomment bellow code .var keyword is used instead of let .It has more power.
// It can use local variable globally.
/*
if (true){
  var iamLocal = 'more value'
  iamGlobal = 'local value of Global'
  console.log(iamLocal);
  console.log(iamGlobal);
}
console.log(iamLocal);
console.log(iamGlobal);
*/
