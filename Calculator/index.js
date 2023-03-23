let number1, number2, operator;
let displayValue = "";
const display = document.querySelector("#displayValue");
let isOperatorClicked = false;

function add(num1, num2) {
  return num1 + Number(num2);
}

function subtract(num1, num2) {
  return num1 - Number(num2);
}

function multiply(num1, num2) {
  return num1 * Number(num2);
}

function divide(num1, num2) {
  return num1 / Number(num2);
}

function operate() {
  switch (operator) {
    case "+":
      return add(number1, number2);
    case "-":
      return subtract(number1, number2);
    case "*":
      return multiply(number1, number2);
    case "/":
      return divide(number1, number2);
    case "=":
      return displayValue;
  }
}

function handleOperatorClicked(op) {
  if (isOperatorClicked) {
    displayValue = operate();
    number1 = Number(displayValue);
    isOperatorClicked = false;
    display.textContent = displayValue;
  }

  if(op.id == "=")
    return;

  if (number1 == undefined)
    number1 = Number(displayValue);  

  isOperatorClicked = true;
  operator = op.id;

  number2 = 0;
  displayValue = "";
}

function handleKeyClicked(key) {
  if (isOperatorClicked) {
    number2 += key.id;
  }
  populateDisplay(key);
}

function addListener() {
  const keys = document.querySelectorAll(".key");
  keys.forEach((key) =>
    key.addEventListener("click", function () {
      handleKeyClicked(key);
    })
  );
  const operators = document.querySelectorAll(".operator");
  operators.forEach((op) =>
    op.addEventListener("click", function () {
      handleOperatorClicked(op);
    })
  );

  const clearButton = document.querySelector("#clear");
  clearButton.addEventListener("click", function () {
    clear();
  })
}

function populateDisplay(key) {
  displayValue += key.id;

  display.textContent = displayValue;
}

function clear(){
  number1 = undefined;
  number2 = 0;
  isOperatorClicked = false;
  displayValue = "";
  display.textContent = "0";
}

addListener();
