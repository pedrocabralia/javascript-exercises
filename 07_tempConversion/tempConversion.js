const convertToCelsius = function(f) {

    c = 5/9 * (f-32);

    c = Math.round(c * 10) /10 ;
    return c

};

const convertToFahrenheit = function(c) {

    f = (c * 1.8) + 32;
    f = Math.round(f * 10)/10;

    return f; 
};
console.log(convertToCelsius(100))
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
