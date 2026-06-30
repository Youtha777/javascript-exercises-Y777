const convertToCelsius = function (fahrenheit) {
  //Math.round (num * 10)/10 -- this will round the number in the ones placed and remove trailing 0
  //conversion formula to fahrenheit -- (num - 32) * 5/9
  return Math.round((((fahrenheit - 32)) * 5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  //Math.round (num * 10)/10 -- this will round the number in the ones placed and remove trailing 0
  //conversion formula to Celsius -- (num * 9/5 + 32)
  return Math.round(((celsius * 9 / 5) + 32) *10)/10;
};

// console.log(convertToCelsius(32));
// console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
