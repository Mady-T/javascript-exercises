const convertToCelsius = function(degreesFarenheit) {
  let degreesCelsius = (degreesFarenheit - 32) * 5/9;
  return +degreesCelsius.toFixed(1);
};

const convertToFahrenheit = function(degreesCelsius) {
  let degreesFarenheit = (degreesCelsius * 9/5) + 32;
  return +degreesFarenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
