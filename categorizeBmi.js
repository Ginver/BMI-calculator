var readline = require("readline-sync")

// -->categorizeBmi

function categorizeBmi(BMI) {
  // console.log("Hi", BMI)
    if (BMI <= 16) {
    return 'Severly underweight'
  } else if (BMI > 16 && BMI <= 18.4) {
    return 'Underweight'
  } else if (BMI > 18.4 && BMI <= 24.9) {
    return 'Normal'
  } else if (BMI >= 25 && BMI <= 29.9) {
    return 'Overweight'
  } else if (BMI > 30) {
    return 'Obese'
  } else {
    return 'error'
  };
 }
// console.log(categorize(BMI))

module.exports = categorizeBmi

