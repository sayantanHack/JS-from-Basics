const myTodos = ['buy bread' , 'python tutorial', 'JS tutorial']
console.log(myTodos.indexOf('buy bread'));


const newTodos = [{
  title: 'buy bread',
  isDone: false,
}, {
  title: 'python tutorial',
  isDone: false,

}, {
    title: 'JS tutorial',
    isDone: false,
}]

const index = newTodos.findIndex(function(todo,index){
  console.log(todo);
  return todo.title === 'python tutorial'

})
console.log(index);

// user can pass new todos & title -----
// ------   Method 1 ---------

const findTodo = function(myTodos, title){
  const index = myTodos.findIndex(function(todo, index){
    return todo.title.toLowerCase() === title.toLowerCase()
  })
  return myTodos[index]
}

let printMe = findTodo(newTodos, 'python tutorial') // not case sensetive
console.log(printMe);

// ------   Method 2 ---------
/* uncomment & use 
const findTodo = function(myTodos, title){
  consttitleReturned = myTodos.find(function(todo, index){
    return todo.title.toLowerCase() === title.toLowerCase()
  })
  return titleReturned
}

let printMe = findTodo(newTodos, 'python tutorial')
console.log(printMe);
*/
