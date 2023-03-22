let number1, number2, operator;

function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1 / num2;
}

function operate(){
    switch(operator){
        case '+': 
            add(number1,number2);
            break;
        case '-':
            subtract(number1,number2);
            break;
        case '*':
            multiply(number1,number2);
        case '/':
            divide(number1,number2);
    }
}