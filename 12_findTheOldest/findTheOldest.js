const findTheOldest = function(peopleArray) {
    const YEAR = 1000*60*60*24*365.25;
    const ageArray = peopleArray.map((person) => {
        return ((person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth);
    });
    const maxAge = Math.max.apply(null,  ageArray);
    const maxAgeIndex =  ageArray.indexOf(maxAge);
    return peopleArray[maxAgeIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
