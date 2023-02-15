var readline = require("readline-sync")
  
function getWeightInput( ) {
  var weight = readline.questionInt("How much do you weigh (kg)")
  return weight
}

module.exports = getWeightInput