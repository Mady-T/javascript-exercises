const fibonacci = function(num) {
    num = +num;
    if (num < 0) return "OOPS";
    if (num === 0) return 0;
//    if (num <= 2) return 1;
    let currNum = 1;
    let prevNum = 1;
    num -= 2;
    while (num-- > 0) {
        let tempNum = currNum;
        currNum += prevNum;
        prevNum = tempNum;
    }
    return currNum;
};

// Do not edit below this line
module.exports = fibonacci;
