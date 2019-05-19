const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const power = (a, b) => {
  return a ** b;
  //Could have also used the Math.pow() method instead of **. For future reference ** isn't recognised in Internet Explorer.
};

const round = (a) => {
  return Math.round(a);
};

const roundUp = (a) => {
  return Math.ceil(a);
};

const roundDown = (a) => {
  return Math.floor(a);
};

const absolute = (a) => {
  return Math.abs(a);
};

const quotient = (a, b) => {
  return Math.trunc(a / b);
  //~~(a/b) also works and is more consice but it's difficult to understand if you don't know what it does. (removes decimimal point and everything after it)
};

const remainder = (a, b) => {
  return a % b;
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder,
};
