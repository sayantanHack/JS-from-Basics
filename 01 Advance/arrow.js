// --  Not so hig advance things --- Advance things are based on the little little small topics

// Let`screate  a simple function .This is a normal function

const sayHello = function(name){
  return "Hey there!! "+ name +"!!"
}

console.log(sayHello('Sayantan'));

// -----  Here we will learn about the arrow functions -------
// In arrow function we remove the function keyword & replacing with an ARROW(=>)

const say =(name) => {
  return "Hey there ,"+name+"!!"
}
console.log(say("Sayantan"));

// reduce the code syntax & make the code is more flexible.

const todos = [{
  title: "make tutorial",
  isDone: true,

},{
  title: 'Python Tutorial',
  isDone: false
}
]
// ----  using normal funtion -----
const thingsDone = todos.filter( function(todo){
  return todo.isDone === true
})

// -----  Converting the Arrow funtions  ----

console.log(thingsDone);
