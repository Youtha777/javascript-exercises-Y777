
//The additional arguments: In the function function removeFromArray(array, ...args), the ...args syntax (called a rest parameter) gathers all the extra arguments you pass in and puts them into an array called args

const removeFromArray = function (arr, ...args) {
  //The loop/check: The .includes(x) method searches through that args array to see if it contains the value x
  return arr.filter((x) => !args.includes(x));

  //For every single item (represented by x) in that main array (arr), the code evaluates: "Is x NOT included in the args array?" If it's not included, the filter keeps it. If it is included, it gets removed.
};

// Do not edit below this line
module.exports = removeFromArray;
