// this is all about loop
const days = ['Mon','Tues','Wed','Thurs','Fri','Sat' ,'Sun']


// Simple for loop .There has three parts , 1st part is initialization where the variable is initialized.
// 2nd Part is Condition .Where the part is compared with the parameters or any value.
// The before going to the 3rd part the inside of the loop will be run, Then It will come to the 3rd part , increase or decrease
// index++ is a shorthand operator which means index = index+1;
for(let index = 0; index < days.length ;index++){
    const element = days[index];
    console.log('Day',index+1,'of week  -- ',element,'\n');
}

/*
Same loop in different apprach The above lop is increasing but this loop will be decreasing one
Now in this case we are staring from the bottom & moving to top
The week days in reverse oder
*/
for(let index = days.length -1 ;index>=0 ; index--){
    console.log('Days',index+1,'of week --', days[index]);
}

//There have another methodf to loop through any object or array  ...
// This is an call back function

// Lets make a function for congrats each days.
let Congo = function(d,index) {
  console.log(`Day ${index+1} : Hey Congrats today is ${d}day. The index is = ${index}`);
}
days.forEach(Congo)

/* In js functions are bobjects so you can also do like this commented code -
    days.forEach(function(d,index){
    console.log(`This is ${d}day , & the index is ${index}`);
  })

uncomment the above code & check.
*/
