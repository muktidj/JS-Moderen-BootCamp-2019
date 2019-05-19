// function - input, code, output 

let greatUser = function () {
  console.log('Welcome User');
}

greatUser();
greatUser();
greatUser();

let square = function (num) {
  let result = num * num
  return result

}
let value = square(3);
let otherValue = square(10);

console.log(value);
console.log(otherValue);


// Challenge Area

let celciusFahrenheitToCelcius = function (fahrenheit) {
  let celcius = (fahrenheit - 32) * 5 / 9;
  return celcius;
}

let tempOne = celciusFahrenheitToCelcius(32);
let tempTwo = celciusFahrenheitToCelcius(68);

console.log(tempOne);
console.log(tempTwo);