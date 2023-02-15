var readline = require("readline-sync")

//getHeightInput

function getHeightInput() {
  var height = readline.questionFloat("How much do you height (m)")
  return height
}

module.exports = getHeightInput