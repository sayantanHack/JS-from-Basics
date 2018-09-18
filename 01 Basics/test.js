function add(x,y){
  return x+y;
}

console.log(add(2,3));  // 5
console.log(typeof add(2,3));  // it is Integer

console.log(add(2.0,3.0));   // 5.0
console.log(typeof add(2.0,3.0));  // it is float
// but JS does not diferenciate the numbers into int float or double

console.log(add('2','3'));  // 23 it will not be added
console.log(typeof add('2','3'));  // cause its a string
