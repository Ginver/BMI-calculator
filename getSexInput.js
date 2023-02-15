var readline = require("readline-sync")

// -->getSexInput
  
function getSexInput( ) {
  var sex = readline.question("What is your sex? male / female ")
  return sex
}

module.exports = getSexInput


// first attempt

//   // calculateBmrMen
// function calculateBmrMen(weight, height, age) {
// return 10 * weight + 625 * height + 5 * age + 5
// }
// console.log(calculateBmrMen(weight, height, age))

//   // calculateBmrWomen
// function calculateBmrWomen(weight, height, age) {
// return 10 * weight + 625 * height + 5 * age - 161
// }
// console.log(calculateBmrWomen(weight, height, age))
