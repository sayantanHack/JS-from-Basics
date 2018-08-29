// geeral form of if else
const convert = (dollar) => {
  if (typeof dollar === 'number'){
    return dollar * 69;
  }
  else{
    throw Error("Ammount need to be a number int or float")
  }
}

const myValue = convert('five')
console.log(myValue);
// Let`s check the try catch block ..... beter approach for this kinda situation
try{
  const myValue = convert('five')
  console.log(myValue);
}
catch(error){
  console.log(error);
}

console.log("I will not run if program crushes.");
