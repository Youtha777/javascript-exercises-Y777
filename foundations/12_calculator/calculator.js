const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arry) {
  return arry.reduce((total, currVal) => {
    return (total += currVal);
  }, 0);
};

const multiply = function (arry) {
  return arry.reduce((total, currVal) => {
    return (total *= currVal);
  }, 1);
};

const power = function (a, b) {
  const arry = [];
  for (i = b; i > 0; i--) {
    arry.push(a);
  }

  return multiply(arry);
};

const factorial = function (num) {
  const result = 1;
  const arry = [];

  for (let i = 1; i <= num; i++) {
    arry.push(i);
  }

  return multiply(arry);
};

console.log(factorial(5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
