// Select the form
const form = document.querySelector("#form");

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // This code user the user inputs

  const athleteName = document.querySelector("#athlete-name").value;
  const currentWeight = parseFloat(
    document.querySelector("#current-weight").value
  );
  const competitions =
    parseInt(document.querySelector("#competitions-entered").value) || 0;
  const privateHours =
    parseFloat(document.querySelector("#private-coaching-hours").value) || 0;

  // Training plan (radio buttons)
  const trainingPlan = document.querySelector(
    'input[name="training-plan"]:checked'
  ).value;
  // This code stops begginers from participating in competitions
  if (trainingPlan === "beginner" && competitions > 0) {
    const output = document.querySelector("#output");

    // This code shows a pop up message saying begginers are not allowed to participate in competitions
    output.innerHTML = `
      <strong style="color:red;">ERROR:</strong><br>
      Beginners are <strong>not allowed</strong> to enter competitions.<br><br>
    `;
    return;
  }

  // This code define the cost of each class
  const planCosts = {
    beginner: 25 * 4, // 4 weeks per month
    intermediate: 30 * 4,
    elite: 35 * 4,
  };

  const privateCoachingCost = privateHours * 9.5;
  const competitionCost = competitions * 22;

  const trainingPlanCost = planCosts[trainingPlan];

  // This code shows the Weight category for each class

  let categoryMessage = "";

  if (currentWeight < 66) {
    categoryMessage = "You are too Ligth to register as a contender.";
  } else if (currentWeight <= 66) {
    categoryMessage = "You are in the Flyweight class category.";
  } else if (currentWeight <= 73) {
    categoryMessage = "You are in the Ligthweight class category.";
  } else if (currentWeight <= 81) {
    categoryMessage = "You are in the Ligth-Middleweight class category.";
  } else if (currentWeight <= 90) {
    categoryMessage = "You are in the Middleweight class category.";
  } else if (currentWeight <= 100) {
    categoryMessage = "You are in Ligth-Heavyweight class category.";
  } else {
    categoryMessage = "You are in the Heavyweight class category.";
  }

  // This code shows the total monthly cost

  const totalCost = trainingPlanCost + privateCoachingCost + competitionCost;

  // This code shows the output of the information and price for each training plan

  const output = document.querySelector("#output");

  output.innerHTML = `
    <strong>Athlete Name:</strong> ${athleteName}<br><br>

    <strong>Itemised Monthly Costs:</strong><br>
    - Training Plan Cost: £${trainingPlanCost.toFixed(2)}<br>
    - Private Coaching Cost: £${privateCoachingCost.toFixed(2)}<br>
    - Competition Fees: £${competitionCost.toFixed(2)}<br><br>

    <strong>Total Monthly Cost:</strong> £${totalCost.toFixed(2)}<br><br>

    <strong>Weight Category Information:</strong><br>
    ${categoryMessage}
  `;
});
