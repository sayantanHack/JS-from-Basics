let myTodo = {
  day: 'Monday',
  meeting: 0,
  meetDone: 0,
}

let addMeeting = function(todo ,meet = 0){
  todo.meeting = todo.meeting + meet
}

let meetDone = function(todo ,meet =0){
  todo.meetDone = todo.meetDone - meet
}

let resetDay = function(todo){
  todo.meetings = 0;
  todo.meetDone = 0

}

let getSummaryOfDay = function(todo){
  let meetLeft = todo.meetings + todo.meetDone
  return `You have  ${meetLeft} meetings today!!`
}

addMeeting(myTodo, 4)
addMeeting(myTodo,2)
meetDone(myTodo, 5)
console.log(myTodo);

console.log(getSummaryOfDay(myTodo));
