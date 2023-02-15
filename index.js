var readline = require("readline-sync")

var getWeightInput = require("./getWeightInput")
var getHeightInput = require("./getHeightInput")
var calculateBmi = require("./calculateBmi")
var categorizeBmi = require("./categorizeBmi")

var getAgeInput = require("./getAgeInput")
var getSexInput = require("./getSexInput")

var calculateBmr = require("./calculateBmr")

var getActivityLevelInput = require("./getActivityLevelInput")
var calculateActiveCalories = require("./calculateActiveCalories")
var totalCalories = require("./totalCalories")

var looseWeight = require("./looseWeight")
var gainWeight = require("./gainWeight")
var howMuchWeightLoose = require("./howMuchWeightLoose")
var howMuchWeightGain = require("./howMuchWeightGain")
var idealWeight = require("./idealWeight")
var advisedCalIntakeGain = require("./advisedCalIntakeGain")
var advisedCalIntakeDiet = require("./advisedCalIntakeDiet")

var weightLooseInFive = require("./weightLooseInFive")
var weightLooseInTen = require("./weightLooseInTen")
var weightLooseInFifteen = require("./weightLooseInFifteen")


var weightGainInFive = require("./weightGainInFive")
var weightGainInTen = require("./weightGainInTen")                
var weightGainInFifteen = require("./weightGainInFifteen")

var weight = getWeightInput()
var height = getHeightInput()
var BMI = calculateBmi(weight, height)

function outputBmi(BMI) {
// return "Your BMI is " + BMI
  console.log("Your BMI is " + BMI)
  }
outputBmi(BMI)

let category = categorizeBmi(BMI)

function outputCategory() {
  return "You are " + category;
}
outputCategory()

//--------------------------------------------------

// Challenge 2.
// var age = readline.questionInt("How old are you (years)?")
// var sex = readline.question("What is your sex?")
// var activityLevel = readline.question("What is your activity level? (Sedentary? / Moderately Active? / Active? / Very active?")

var age = getAgeInput()
// console.log("What is age?", age)

var sex = getSexInput()
// console.log("What is sex?", sex)

var BMR = calculateBmr(weight, height, age, sex)
console.log("Your BMR is " + BMR)

var activityLevel = getActivityLevelInput()
// console.log("What is activityLevel?", activityLevel)

var activeCalories = calculateActiveCalories(activityLevel)
console.log("Your estimated active calories are " + activeCalories)

var totalCal = totalCalories(BMR, activeCalories)
// console.log("What is totalCal?", totalCal)

function logTotalCal(totalCal) {
console.log("Your total calories are: " + totalCal)
}
logTotalCal(totalCal)

//--------------------------------------------------

// Challenge 3

// ## Diet plan
// 1 kg of body fat is approximately 7700 calories. That means that by cutting expending 500 more calories than you eat you can lose almost 0.5 kg in a week

// Create a diet plan for the user by
// Taking their total calories and subtracting 500 this is the suggested intake
// Calculate the weight they will be in 5, 10 and 15 weeks
// BMI | 18.5 - 24.9  | Normal  
// BMI = weight / (height * height)
// weight = BMI / weight * height * 100
// Output the plan: the suggested intake and their weight goals for 5, 10 and 15 weeks


var dietCalories = looseWeight(totalCal)
var idealWeightGoal = idealWeight(BMI, weight, height)
var weightGainKg = howMuchWeightGain(weight, idealWeightGoal)
var weightLooseKg = howMuchWeightLoose(weight, idealWeightGoal)

function dietOrNoDiet(BMI) {
  if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("You have a healthy BMI level. Treat yourself with a cake :)")
    
} else if (BMI < 18.5) {
    console.log("You have to gain weight. Please look at our diet plan ")
    var gainCalories = gainWeight(totalCal)
    var idealWeightGoal = idealWeight(BMI, weight, height)
    console.log("Your ideal weight should be around " + idealWeightGoal + " kilograms.")
    advisedCalIntakeGain(totalCal) 
    var weightGainKg = howMuchWeightGain(weight, idealWeightGoal)
    console.log("You should gain " + weightGainKg + " kilograms.")

    var weightGainInFiveWeeks = weightGainInFive(weight) 
    console.log("With a 5 week diet plan, your weight will be " + weightGainInFiveWeeks + " kilograms.")
    var weightGainInTenWeeks = weightGainInTen(weight) 
    console.log("With a 10 week diet plan, your weight will be " + weightGainInTenWeeks + " kilograms.")
    var weightGainInFifteenWeeks = weightGainInFifteen(weight) 
    console.log("With a 15 week diet plan, your weight will be " + weightGainInFifteenWeeks + " kilograms.")
    
} else if (BMI > 24.9) {
    console.log("You should loose some weight. Please look at our diet plan.")
    var dietCalories = looseWeight(totalCal)
    var idealWeightGoal = idealWeight(BMI, weight, height)
    console.log("Your ideal weight should be around " + idealWeightGoal + " kilograms.")
    advisedCalIntakeDiet(dietCalories)
    var weightLooseKg = howMuchWeightLoose(weight, idealWeightGoal)
    console.log("You should loose " + weightLooseKg + " kilograms.")
    
    var weightLooseInFiveWeeks = weightLooseInFive(weight) 
    console.log("With a 5 week diet plan, your weight will be " + weightLooseInFiveWeeks + "kilograms.")
    var weightLooseInTenWeeks = weightLooseInTen(weight) 
    console.log("With a 10 week diet plan, your weight will be " + weightLooseInTenWeeks + "kilograms.")
    var weightLooseInFifteenWeeks = weightLooseInFifteen(weight) 
    console.log("With a 15 week diet plan, your weight will be " + weightLooseInFifteenWeeks + "kilograms.")
    
} else {
  console.log("error")
}
}
dietOrNoDiet(BMI)



                                  
