const convertToCelsius = function(degreesFahrenheit) {
  let raw = (degreesFahrenheit-32)*5/9;
  return raw % 1 === 0 ? raw : Number(raw.toFixed(1));
};
const convertToFahrenheit = function(degreesCelsius) {
  let raw = (degreesCelsius*9/5)+32;
  return raw % 1 === 0 ? raw : Number(raw.toFixed(1));
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
