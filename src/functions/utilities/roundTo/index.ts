// precision: number of decimals in rounded number
const roundTo = (number: number, precision = 0) => {
  var d: number = Math.pow(10, precision);
  return Math.round(number * d) / d;
};

export default roundTo;
