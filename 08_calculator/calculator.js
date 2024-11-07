const add = function (...input) {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
  }
  return sum;
};

const subtract = function (...input) {
  let sum = input[0];
  for (let i = 1; i < input.length; i++) {
    sum -= input[i];
  }
  return sum;
};

const sum = function (input) {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
  }
  return sum;
};

const multiply = function (input) {
  let sum = 1;
  for (let i = 0; i < input.length; i++) {
    sum *= input[i];
  }
  return sum;
};

const power = function (number, power) {
  return Math.pow(number, power);
};

const factorial = function (number) {
  if (number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
