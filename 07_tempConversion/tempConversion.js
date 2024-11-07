const convertToCelsius = function (fahrenheit) {
  const convertToCelsius = Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
  return convertToCelsius;
};

const convertToFahrenheit = function (celsius) {
  const convertToFahrenheit = Math.round((celsius * (9 / 5) + 32) * 10) / 10;
  return convertToFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
