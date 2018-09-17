
function myValidation(){
  let myVal = document.getElementById('myform').value;

  if (isNaN(myVal) || myVal < 1 || myVal > 20) {
    console.log("Not a valid input");
  }
  else {
    console.log("The input is OK.");
  }
}
