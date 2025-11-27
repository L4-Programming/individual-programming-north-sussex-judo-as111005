/* Refer to the README.md for instructions on what you need to do in this project */

alert("Hello, World!");
const trainingPlan = document.querySelector("#training-plan").value;
let planCosts = {
beginner: 25 * 4,
intermediate: 30 * 4,
elite: 35 * 4,
};
let monthlyCost = planCosts[trainingPlan]