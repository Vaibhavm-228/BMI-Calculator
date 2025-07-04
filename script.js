// script.js

let calculateBMI = document.getElementById("calculate");

calculateBMI.addEventListener("click", () => {
  // get values from input
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;

  // convert to numbers
  height = Number(height);
  weight = Number(weight);

  let resultMsg = "";

  if (height > 0 && weight > 0) {
    // calculate BMI
    let bmi = weight / (height / 100) ** 2;
    bmi = bmi.toFixed(2);

    resultMsg = `Your BMI is ${bmi}. `;

    if (bmi < 18.5) {
      resultMsg += "(Underweight)";
    } else if (bmi >= 18.5 && bmi < 25) {
      resultMsg += "(Normal)";
    } else if (bmi >= 25 && bmi < 30) {
      resultMsg += "(Overweight)";
    } else if (bmi >= 30) {
      resultMsg += "(Obese)";
    }
  } else {
    resultMsg = "Please enter valid height and weight!";
  }

  document.getElementById("result").innerHTML = resultMsg;
});
