var readline = require("readline-sync")
  
function getActivityLevelInput() {
  var activityLevel = readline.question("What is your activity level? (Sedentary? / Moderately Active? / Active? / Very active? ")
  return activityLevel
}

module.exports = getActivityLevelInput