var readline = require("readline-sync")

// -->getAgeInput

function getAgeInput( ) {
  var age = readline.questionInt("How old are you (years)?")
  return age
}

module.exports = getAgeInput