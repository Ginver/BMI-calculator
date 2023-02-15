var readline = require("readline-sync")

function idealWeight(BMI, weight, height) {
  return BMI / weight * height * 100
}
// idealWeight(BMI, height)
// console.log("idealWeight?", idealWeight(BMI, height))

module.exports = idealWeight