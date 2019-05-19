// Multiple Arguments
let add = function(a, b, c) {
  return a + b - c
}

let result = add(100, 80, 90);
console.log(result);

// Default Arguments
let getScoreText = function (name = 'Mukti Dwi Jatmoko', score = 98) {
   return ' Name: ' + name + ' - Score: ' + score 
}

let scoreText = getScoreText('Ayu Retno')
console.log(scoreText);

// challenge Area 
// A 25% tip on $40 would be $1-
let getTip = function (total , tipPercent = .2) {
  let percent = tipPercent * 100;
  let tip = total * tipPercent;
  return `A ${percent} tip on ${total} would be ${tip}`
}

let tip = getTip(90);
console.log(tip);

// template String
let name = "Mukti"
let age = Math.floor(Math.random() * 100);
console.log(`Hello, my name is ${name}, i'am ${age} years old`);