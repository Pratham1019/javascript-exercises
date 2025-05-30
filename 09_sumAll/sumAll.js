const sumAll = function(a, b) {
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    } 

    const max = Math.max(a, b);
    const min = Math.min(a, b) - 1;
    return (max * (max + 1) / 2) - (min * (min + 1) / 2);
};

// Do not edit below this line
module.exports = sumAll;
