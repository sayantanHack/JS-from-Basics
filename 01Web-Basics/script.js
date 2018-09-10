// the goal is how to change the contet of the paragraphs
//const myElem =document.querySelectorAll('.clsone')

const myParaElem = document.querySelector('p')
console.log(myParaElem);

myParaElem.textContent = "I`m changing for JS"
// now see in your browser the 1st paragraph get changed
/* If you wanna do the same changes in other any tags u can. In case of this there have another
    <p> tags by using looping
*/
const myPElem = document.querySelectorAll('p')

myPElem.forEach(function(p){
  p.textContent = 'I am changed into looping ...'
})

// same thing in arrow function

myPElements.forEach( (p) => p.textContent = " Assignment Completed " );﻿

document.title = "Now I`ve changed"

console.log(document.title);
