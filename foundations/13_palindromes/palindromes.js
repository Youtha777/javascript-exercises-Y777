const palindromes = function (str) {
  
  const newStr = str.replace(/[^a-zA-Z0-9]/g, ''); 
  let strLength = newStr.length - 1;
  
  console.log(newStr);

  for (let i = 0; i < strLength; i++){
    if (newStr[i].toLowerCase() != newStr[strLength].toLowerCase()){
      // console.log(`${newStr[i].toLowerCase()}, ${i} and ${newStr[strLength].toLowerCase()}, ${strLength}`);
      return false;
    } else{
      // console.log(`${newStr[i].toLowerCase()} and ${newStr[strLength].toLowerCase()}`)
      strLength--;
    }

  }

  return true;

};

// console.log(palindromes("A car, a man, a maraca."));

// Do not edit below this line
module.exports = palindromes;
