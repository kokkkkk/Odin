const removeFromArray = function(array, element) {
    const args = Array.from(arguments);

    const result = array.filter(word => !args.includes(word));

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
