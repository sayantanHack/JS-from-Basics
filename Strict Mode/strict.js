// strinct mode is really strict. The mode lgically correct 100%
// Its kind of sensetive mode in code
"use strict"; // by writing this file the entire file will be running in srtrict mode
// you can also use strict mode in individual functions
// all you have to do write "use strict"; at the 1st line of your function

function newStrict(){
  "use strict";
  var y = 3.14;
}

// strict mode converts mistakes or bad syntax into ERRORs
// JS is smart so mistyping a variable creates a new global variable
// but in strict mode it will be an error
// deleting a variable is not allowed in this mode it can be in normal mode
//in normal mode
var obj= {};
Object.defineProperty(obj, 'x', {value: 0, writable: false });

obj.x = 3.14
// In strict mode

var obj ={get x() {return 0}};
obj.x = 3.14;
// strict mode function parameter should be unique
