var readline = require("readline-sync")

function howMuchWeightGain(weight, idealWeightGoal) {
  return idealWeightGoal - weight
}


module.exports = howMuchWeightGain