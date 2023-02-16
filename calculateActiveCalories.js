var readline = require("readline-sync")

function calculateActiveCalories(activityLevel) {
  if (activityLevel === "Sedentary") {
  return 100
} else if (activityLevel === "Moderately Active") {
  return 300
} else if (activityLevel === "Active") {
  return 500
  } else if (activityLevel === "Very active") {
  return 700
  } else {
  return 'error'
  }
}
// console.log(calculateActiveCalories(activityLevel))

module.exports = calculateActiveCalories


