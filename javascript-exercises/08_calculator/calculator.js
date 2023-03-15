const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
	const total = a.reduce((sum, i) =>{
    return sum += i;
  },0);

  return total;
};

const multiply = function(a) {
  const total = a.reduce((sum, i) =>{
    return sum *= i;
  });

  return total;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	if(a==1 || a==0)
    return 1;
  
  let total = 1;
  for(i=a; i>0;i--){
    total *= i;
  }

  return total;
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
