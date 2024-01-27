const leapYears = function(year) {
    year = Math.floor(year);
    return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;
