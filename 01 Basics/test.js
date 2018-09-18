function add(x,y){
  return x+y;
}

console.log(add(2,3));  // 5
console.log(typeof add(2,3));  // it is Integer

console.log(add(0.2,0.3));   // 5.0
console.log(typeof add(0.2,0.3));  // it is float
// but JS does not diferenciate the numbers into int float or double

console.log(add('2','3'));  // 23 it will not be added
console.log(typeof add('2','3'));  // cause its a string

// let`s check the & make it more affective

function addTwo(x,y){
  if((typeof x && typeof y) !== 'number'){
    throw new Error("parameter must be a number");
  }
  return x + y ;
  if (parseInt(result) !== result){
    result = parseFloat(result.toFixed(1));
  }
  return result;
}
 // now pass the all abobe things to test the accuricy
 
