//kings teritory
let king = 'john'

if(true) {
  let king = 'Sam' // if sam will not there the king will find its name 1 step earlier. which is john

  if (true) {
    let king = 'Ram' // if the king is not assigned to Ram then it will find king one step before.
                                                    //which is Sam
    console.log(king);
  }
}

if (true) {
  console.log("this is 2nd part :" + king);
}
