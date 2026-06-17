const reverseString = function(str) {
  let copiedStrToReverse = '';
  
  //loop through the string passed in and copy each char in the string starting from the end
  for (let i = str.length-1; i >= 0; i--){
    copiedStrToReverse += str.at(i);
  }
  return copiedStrToReverse;
};


// Do not edit below this line
module.exports = reverseString;
