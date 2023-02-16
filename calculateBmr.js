var readline = require("readline-sync")

// -->calculateBmr

function calculateBmr(weight, height, age, sex) {
  if (sex === "male") {
  return 10 * weight + 625 * height + 5 * age + 5
} else if (sex === "female") {
  return 10 * weight + 625 * height + 5 * age - 161
}
}

module.exports = calculateBmr


