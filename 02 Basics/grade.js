/*
---------------   GRADE  ------------

This is a grade problem .In a school there have exam out of 15.
Students will be Graded with an comment .

10 or above  - Amazing
 5 or above  - Good
 3 or above  - poor
 bellow 3  - fail

*/

var marks = 9.6;

if (marks<3) {
  console.log('FAIL');
}
else if (marks<5) {
  console.log("poor");
}
else if (marks<10) {
  console.log("GOOD");
}
else{
  console.log("AMAZING !!");
}
