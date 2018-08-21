// -------- Random number generation.......

let numOne= 22
let numTwo = 7

result = 22/7

console.log(result.toFixed(2)); // runding up the number

let floatResult = result.toFixed(2)

console.log(Math.floor(floatResult));


// ----------lets make some random number ------

console.log('This is the original random num:',Math.random());
console.log('Random number multiplied by 10: ',Math.random() * 10);
//  ------  Now the dice ball concept -----

let upper = 6
let lower = 1

let myRandom = Math.floor(Math.random() * (upper - lower+ 1)) + lower

console.log(`Dice rolling : ${myRandom}`);
