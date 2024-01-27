const sumAll = function(lowerNum, upperNum) {
    if (typeof(lowerNum) !== "number" || typeof(upperNum) !== "number") {
        return "ERROR";
    }
    if (upperNum < lowerNum) {
        [upperNum, lowerNum] = [lowerNum, upperNum];
    }
    if (lowerNum < 0) return "ERROR";
    let sum = lowerNum++;
    while (lowerNum <= upperNum) {
        sum += lowerNum++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
