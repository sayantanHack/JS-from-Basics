//Only two condition True or False

// if the if statement is true only the if block will run
// if the if block gets false then else if block will be checked,
// if the if else block also have an  false statement then lastly the else part will be executed

if (false) {
  console.log("I`m insid in the if block");
}
else if(true){
  console.log("I am inside IF IN CAPS BLOCK ");
}
else {
  console.log("I`m inside else block");
}

/* --------   A real case problem ----------
    user  should be verified in between 3 days .Otherwise S/he will be rejected
*/

var TypeofUser = 'user'

//triple equal for checking the string
if(TypeofUser === 'user'){
  console.log("Hi , Welcome to our group !!!");
}
else if (TypeofUser === "teacher") {
    console.log('Welcome to take part of this !!');
}
else{
  console.log('MESSAGE: Please verify your email.'); 
}
