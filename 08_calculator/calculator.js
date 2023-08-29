const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(a) {
  const sumd = a.reduce((sum, e) => sum + e, 0);
  console.log(sumd);
  return sumd;
	
};

const multiply = function(a) {
  if (a.length == 0)return 0;
  const pro = a.reduce((p, e) => p*e, 1);
  console.log(pro);
  return pro;
};

const power = function(a, b) {
  return a**b;
	
};

const factorial = function(a) {
  if (a <= 1)return 1;
  return a*factorial(a-1);
	
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
