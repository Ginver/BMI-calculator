var readline = require("readline-sync")

// -->categorizeBmi

// let category
  // if (BMI <= 16) {
  //   category = 'Severly underweight'
  // } else if (BMI > 16 && BMI <= 18.4) {
  //   category = 'Underweight'
  // } else if (BMI > 18.4 && BMI <= 24.9) {
  //   category = 'Normal'
  // } else if (BMI >= 25 && BMI <= 29.9) {
  //   category = 'Overweight'
  // } else if (BMI > 30) {
  //   category = 'Obese'
  // } else {
  //   category = 'error'
  // };

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
// categorizeBmi(BMI)
// console.log(categorize(BMI))

module.exports = categorizeBmi

