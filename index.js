let numberToCalc = document.getElementById("inputvalues");

let calc = (num) => {
  numberToCalc.value += num;
  if (numberToCalc.value.length > 15) {
    alert("Can't enter more than 15 digits");
  }
};

let result = () => {
  try {
    numberToCalc.value = eval(numberToCalc.value);
  } catch (err) {
    alert("Enter valid mathematical calculation");
  }
};

let perc = () => {
  numberToCalc.value = eval(numberToCalc.value) * 0.01;
};

clr = () => {
  numberToCalc.value = " ";
};

del = () => {
  numberToCalc.value = numberToCalc.value.slice(0, -1);
};

// var count= 0
// setColor = () => {

//   document.getElementsByTagName("button").style.backgroundColor = ;;
//   if
// };

// console.log(setColor("C"));
