const leapYears = function(year) {

  //Check to see if the year passed in is divisible by 4 w/no remainder using mod
  if (year % 4 == 0 ){
    
    //2nd check to see if it is divisible by 100
    //if the year is divisibile by 100 it may not be a leap year 
    //unless the year is also divisible by 400
    //if both statement are true here, then it is not a leap year
    if (year % 100 == 0 && year % 400 !== 0){
      return false;
    }

    //if the year is divisible by both 100 and 400 then return true
    return true; 
  }

  //the year is not divisible by 4, it is not a leap year
  return false;
};


// console.log(leapYears(1600));

// Do not edit below this line
module.exports = leapYears;
