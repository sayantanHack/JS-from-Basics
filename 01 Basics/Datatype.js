// There ahve 2 types of datatypes  one is Premitive datatypes another is Object type.
// Premitive  -  The inbuild datatypes in JS we cannot  change this.
// Object type - The object type is the user defined datatypes , user can add this
//  In the premitive datatypes , there have three parts . 1. Number , 2. String , 3. Boolean .There have another minor teo those are -undefined and Null.
// There have some object type Array , Object , Function( yes its a datatype here )

/*
Number - Its simply a number like ,int , float etc.
String - Its basically an array of Character . Any kind of statement or sentence . Its allways put inside the single or Double quote ("" or '')
Boolean - Its an logical operator either True or False .

Undefined  -  This means we initialized variable but have not put any values into it.
Null -  We initialized the variable but dont know what will be the value . So we put Null

*/


var name = 'Nil';
var skills = ['java','c++','python','Django'];

var something;    //  undefined
var anything = null;   // null


console.log(typeof name);   // string
console.log(typeof skills);   // object

console.log(something == anything);  // True .Cz Its may be true or there have a chance to be true (Truthy value)
// for more details about the truthy value and Falsy value visit https://developer.mozilla.org/en-US/docs/Glossary/Truthy
// Falsy value https://developer.mozilla.org/en-US/docs/Glossary/Falsy

console.log(something === aything); // False . Cz triple equal to(===) means the exact matches , no near about values or may be thing like truthy or falsy.

// Let`s try another example ; We are comparing int to string using a same value.
console.log(100 == '100');  // True ; Oversmart JS compliler , the Truthyness.

// Let`s be practical
console.log(100 === '100');  // False ; You don`t need to be oversmart JS...
