let numberToCalc = document.getElementById("inputvalues");

// This function takes in an argument and it to what is already in the input field
// It also alerts the user when more than 15digits are is entered
let calc = (num) => {
  numberToCalc.value += num;
  if (numberToCalc.value.length > 15) {
    alert("Can't enter more than 15 digits");
  }
};

// This function evaluates the content of the input
// It also alert the user if the inputs are not mathematically valid to be calculated
let result = () => {
  try {
    numberToCalc.value = eval(numberToCalc.value);
  } catch (err) {
    alert("Enter valid mathematical calculation");
  }
};

//  This function returns the percentage of evaluated inputs
let perc = () => {
  numberToCalc.value = eval(numberToCalc.value) * 0.01;
};

// This function clears the input field
clr = () => {
  numberToCalc.value = " ";
};

// Function to delete the last digit or operator in the field
del = () => {
  numberToCalc.value = numberToCalc.value.slice(0, -1);
};
