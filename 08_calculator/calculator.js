const add = function(a, b) {
  return a + b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(arr) {
  // if you write a function {inside of here}, you're not implicitly return the value of whatever is computed inside
  return arr.reduce((accumulator, currentValue)=>accumulator+currentValue,0);
};

const multiply = function(arr) {
  return arr.reduce((accumulator, currentValue)=>accumulator*currentValue,1);
};

const power = function(a, pow) {
	return a ** pow;
};

const factorial = function(a) {
  if((a === 1 || a===0)) return 1;
  return a * factorial(a-1);
};

console.log(factorial(7));
console.log(sum([1,2]));
console.log(multiply([1,2]));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
