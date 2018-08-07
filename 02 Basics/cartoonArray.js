// Datatype  - Array


const superHeros = ['Spiderman' , 'batman', 'superman']

console.log(superHeros[1]);
console.log('WE have',superHeros.length,'Super heros');
//or you can also try this too..
console.log(`We have ${superHeros.length} super Heros.`);
console.log('Last item is - ',superHeros[superHeros.length - 1]);


/*

Lets take another array & use its fuctions like length ,capitalization etc.

*/

var names = [];

names[0]='Ashik'
names[1] = 'Rajeeb'
names[2] = 'Rohan'
names[3] = 'Neha'

console.log('There have',names.length , 'values in it.');
// Let`s print each name in uppercase
for(var i =0; i < names.length; i++){
  console.log('Hello', names[i].toUpperCase(),'!!');
}

// ext to find the index number of any particular item

console.log(indexOf('Rohan')); // indexOf function helps to find the index number of the name entered.
