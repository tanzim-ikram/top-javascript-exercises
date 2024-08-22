const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  let sub = 0;
  if (num1 > num2) {
    sub = num1 - num2;
  }
  else {
    sub = num2 - num1;
  }
  return sub;
};

const sum = function (array) {
  let sum = 0;
  
  for (let i = 0; i < array.length; i++) {
      sum += array[i];
  }
  return sum;
};

const multiply = function (array) {
  let result = 1;

  for (let i = 0; i < array.length; i++) {
    result = result * array[i];
  }
  return result;
};

const power = function (num, power) {
  return Math.pow(num, power);
};

const factorial = function (num) {
  if (num === 0) return 1;
  let product = 1;
  for (let i = num; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
