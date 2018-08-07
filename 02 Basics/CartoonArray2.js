// this is the extended part of cartoon


const num =['one','two','three','four','five','six']

num[1] = 'New'; // It replaces the files of the index.
console.log(num);

// Start manipulate
num.shift();  // The 1st element is gone. Actually shifted by deleting 1st element.
console.log(num);

num.unshift('start'); // unshift add values to the begining.It needs arguements
console.log(num);


//End list manipulation
// num.,pop(); is for removing last element
// you can Actually see that which number is poped out
console.log("The number is poped : ",num.pop());
console.log(num);

// There have some push too
num.push('six');  //allways push need some arguement
console.log(num);


// Middle
num.splice(2,1,'Something'); //splice(start_from_this_element , Delete_thismany_num , 'Add it in that place')
console.log(num);
