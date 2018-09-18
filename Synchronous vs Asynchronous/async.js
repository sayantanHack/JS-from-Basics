// let`s come into Asynchronous there have a function
// Here we create a annonimous funcion & call it in between the other functions
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
function annonFun(){
  d("Hey N00bs Anon is on fire!! ");
}

one();
two();
setTimeout(annonFun, 3000); // this is the 3 sec = 3k milisec after 3 sec it will come & run
three();    //  In the mean time tree & if there had any other function may run.
// test this in your browsers console 
