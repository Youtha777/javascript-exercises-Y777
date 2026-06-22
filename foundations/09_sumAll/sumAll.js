const sumAll = function(num1, num2) {
  
  //declare a variable to hold the sum of all numbers in the range passed in
  let sum = 0;

  //check arguments passed in are integers
  if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2))
  {
    return "ERROR";
  }
  //handle the order in case the first argument is larger number than the second number 
  else if (num2 < num1){
    for (num2; num2 <= num1; num2++)
    {
      sum += num2; 
    }
  } else{
    for (num1; num1 <= num2; num1++)
    {
      sum += num1; 
    }
  }
  //return the sum
  return sum; 
};

// console.log(sumAll(1,4));

// Do not edit below this line
module.exports = sumAll;
