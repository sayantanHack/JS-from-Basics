// to see what is inside the title type bellow command
//  To see the changes you just need to check in inspect mode console of ur browser
// do uncomment & comment to use codes 
/*
console.log(document.title);

// or to change anything in any tag
document.title = "Now I`m changed"

// now let`s  use tag selecting by id or class
console.log(document.getElementById('idone'));
console.log(document.getElementsByClassName('cls'));
// There have a good option to select query
*/
const myElement = document.querySelectorAll("p")
// selectiong id & clases is just like CSS
const myElementId = document.querySelectorAll('#idone')
const myElementCl = document.querySelectorAll(".cls")

console.log(myElement , myElementCl, myElementId);
