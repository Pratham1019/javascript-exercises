const convertToCelsius = function (temp) {
	const celsius = (temp - 32) * (5 / 9);
	return Number(celsius.toFixed(1));
};

const convertToFahrenheit = function (temp) {
	const fahrenheit = (9 / 5) * temp + 32;
	return Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit
};
