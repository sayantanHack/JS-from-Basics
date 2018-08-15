let myTodo = {
  day: 'Monday',
  meeting: 0,
  meetDone: 0,

  addMeeting: function(){
    console.log("Hwy, I`m function");
    console.log(this);
  }
}

// Let`s create a method just like -> console.log();

myTodo.addMeeting(4)


// access the all property of my obj
let myTodoTwo = {
  day: 'Friday',
  meeting: 5,
  meetDone: 3,

  addMeeting: function(num){
    this.meetings = this.meetings + num
    console.log("Hwy, I`m function");
    console.log(this);  // This keyword reffer to the total myTodo class
  }
    summary: function(){
      return`You have ${this.meetings} meetings today !!`
    }
  }

myTodoTwo.addMeeting(4)

myTodoTwo.summary()
