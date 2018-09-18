// In synchronous the functions are called in chronological order but in case of asynchronous function the any function can be called from anywhere .
// test the functions in your browsers console. There have a html file open that in ur browser & test.

function d(o){
  console.log(o);
}

function one(){
  d("This is ONE!!!");
}

function two(){
  d("This is TWO man!!!");
}
function three(){
  d("THREE is here bro!!!");
}

one();
two();
three();
/* here the functions are Synchronous so it`s arranged in chronological order .
 If you wanna rearrange the order of functions then log will not be happen.
 This is arranged in Call stacks.
 Here at the First step the function one()is called 
