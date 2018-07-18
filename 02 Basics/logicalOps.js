// && -  ampersand is used for AND operator
//  ||  - pipe used for OR operator
//  !  -  exclamation is used for not operations(reverse)

//change the bellow trues into false to make different situations
let isVerified = true
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

if (isVerified && isLoggedIn && hasPaymentToken) {
  console.log("Greeting to the user");
  console.log("Grant access!!");
}
else if(isVerified || isGuest){
  console.log("Allowed for fre preview");
}else{
  console.log("please contact admins.");
}
