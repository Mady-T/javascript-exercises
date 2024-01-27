const palindromes = function (string) {
    let strArray = string.toLowerCase().split("");
    strArray = strArray.filter((value) => /\w/.test(value));
    string = strArray.join("");
    return string === strArray.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
