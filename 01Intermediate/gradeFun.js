let getMyGrade = function(currentMarks, totalMarks){
  let myPercent = (currentMarks/totalMarks) *100;

    let myGrade = '';

    if(Number.isInteger(currentMarks) && Number.isInteger(totalMarks)){

      if(myPercent >=90){
        myGrade = "A";
      }
      else if(myPercent >= 70){
        myGrade = 'B';
      }
      else if(myPercent >= 60){
        myGrade = 'C';
      }
      else if(myPercent >= 45){
        myGrade = 'D';
      }
      else if(myPercent >= 35){
        myGrade = 'Fail';
      }
      return `Your grade is ${myGrade} . And the percentage is ${myPercent}`;
    }
    else{
      console.log('Please enter a proper number.');
    }
}

let yourResult = getMyGrade(52/100)
console.log(yourResult);
