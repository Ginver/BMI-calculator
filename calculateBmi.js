var readline = require("readline-sync")

// -->calculateBmi
function calculateBmi(weight, height) {
  return (weight / (height * height)).toFixed(2)
  }
// console.log(calculateBmi())

module.exports = calculateBmi