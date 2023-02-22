const sumAll = function(num1, num2) {

    if(!isInputValid(num1,num2)){
        return "ERROR";
    }

    start = Math.min(num1, num2);
    end = Math.max(num1,num2);

    result = 0;

    for(i = start; i <= end; i++){
        result += i;
    }

    return result;
};


const isInputValid = function(num1, num2){
    if(num1<0||num2 <0){
        return false;
    }

    if(typeof(num1) != "number" || typeof(num2) != "number" ){
        return false;
    }

    return true;
}

// Do not edit below this line
module.exports = sumAll;
