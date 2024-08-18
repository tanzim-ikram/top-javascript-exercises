const convertToCelsius = function (temp) {
  let tempCelsius = (temp - 32) * 5 / 9;
  return parseFloat(tempCelsius.toFixed(1));
};

const convertToFahrenheit = function (temp) {
  let tempFahrenheit = (temp * 9 / 5) + 32;
  return parseFloat(tempFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
