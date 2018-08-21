//  The equality is checked by double equals ; Identity is checked by tripple equals
//  == operator (Equality)  , === operator (Identity)

console.log('When two equals to two point zero',2 == 2.0);
console.log('When two identical to two point zero',2 === 2.0);

// let`s try it for objects
let myVar = {}
let myVarTwo = {}

console.log('The objects are in equality',myVar == myVarTwo);
console.log('The objects are in identity',myVar === myVarTwo);

// for the empty string

let v1 = ""
let v2= ''

console.log('The empty strings in equality',v1 == v2);
console.log('The empty strings in identity',v1 === v2);
