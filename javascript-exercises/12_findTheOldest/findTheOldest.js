const findTheOldest = function (list) {



    const result = list.sort(function (a, b) {

        const lastGuy = a.hasOwnProperty("yearOfDeath") ? a.yearOfDeath - a.yearOfBirth : (new Date()).getFullYear() - a.yearOfBirth;
        const nextGuy = b.hasOwnProperty("yearOfDeath") ? b.yearOfDeath - b.yearOfBirth : (new Date()).getFullYear() - b.yearOfBirth;

        return lastGuy > nextGuy ? -1 : 1;
    })
    return result[0];


};

// Do not edit below this line
module.exports = findTheOldest;
