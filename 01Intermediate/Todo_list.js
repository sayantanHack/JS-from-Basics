const myTodo = []

myTodo.push('Buy Bread')
myTodo.push('Contribute opensource')
myTodo.push('Do some code')

// forEach function is used to loop over the element
myTodo.forEach(function(todo, index){
    console.log(`Task no. is ${index +1} Task is ${todo}`);
})
