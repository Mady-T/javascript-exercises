const removeFromArray = function(array, ...elems) {
    for (element of elems) {
        let currIndex = array.indexOf(element);
        while (currIndex !== -1) {
            array.splice(currIndex, 1);
            currIndex = array.indexOf(element, currIndex);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
