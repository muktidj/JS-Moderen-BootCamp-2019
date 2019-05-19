// Global scope celciusFahrenheitToCelcius, tempOne, tempTwo
  // Local Scope fahrenheit, celcius
    //  Local Scope isFreezing


let celciusFahrenheitToCelcius = function (fahrenheit) {
  let celcius = (fahrenheit - 32) * 5 / 9;

  if (celcius <= 0) {
    let isFreezing = true;
  }
  return celcius;
}

let tempOne = celciusFahrenheitToCelcius(32);
let tempTwo = celciusFahrenheitToCelcius(68);

console.log(tempOne);
console.log(tempTwo);