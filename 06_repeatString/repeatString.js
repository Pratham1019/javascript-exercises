const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }

    let rStr = '';
    for (let i = 0; i < num; i++) {
        rStr = rStr.concat(string);
    }

    return rStr;
};

// Do not edit below this line
module.exports = repeatString;
