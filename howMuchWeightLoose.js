var readline = require("readline-sync")

function howMuchWeightLoose(weight, idealWeightGoal) {
  return weight - idealWeightGoal
}

module.exports = howMuchWeightLoose