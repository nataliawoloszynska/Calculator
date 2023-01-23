// Global constants
const currentNumber = document.querySelector(".current-number");
const previousNumber = document.querySelector(".previous-number p");
const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");
const mathSign = document.querySelector(".math-sign");
const equalButton = document.querySelector("#equal");
const ceButton = document.querySelector("#ce");
const acButton = document.querySelector("#ac");

let result = "";
let operator = "";

// Functions
function displayNumber() {
  if (this.textContent === "." && currentNumber.innerHTML.includes(".")) {
    return;
  }
  currentNumber.innerHTML += this.textContent;
}

function operation(e) {
  operator = e.target.getAttribute("data-operator");
  mathSign.innerHTML = operator;
  previousNumber.innerHTML = currentNumber.innerHTML;
  currentNumber.innerHTML = "";
  if (
    operator === "+" ||
    operator === "-" ||
    operator === "/" ||
    operator === "*"
  ) {
    return showResult();
  }
  if (operator === "+/-") {
    currentNumber.innerHTML = "-" + previousNumber.innerHTML;
    previousNumber.innerHTML = "";
    mathSign.innerHTML = "";
  }
  if (operator === "%") {
    currentNumber.innerHTML = Number(previousNumber.innerHTML) / 100;
    previousNumber.innerHTML = "";
    mathSign.innerHTML = "";
  }
}

function showResult() {
  if (previousNumber.innerHTML === "" || currentNumber.innerHTML === "") {
    return;
  }
  let a = Number(currentNumber.innerHTML);
  let b = Number(previousNumber.innerHTML);

  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = b - a;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = b / a;
  }

  currentNumber.textContent = result.toString();
  previousNumber.textContent = "";
  mathSign.textContent = "";
}

function deleteLast() {
  currentNumber.innerHTML = "";
}

function clearAll() {
  previousNumber.innerHTML = "";
  currentNumber.innerHTML = "";
  mathSign.innerHTML = "";
}

// Listeners
numberButtons.forEach((button) => {
  button.addEventListener("click", displayNumber);
});
operationButtons.forEach((button) => {
  button.addEventListener("click", operation);
});
equalButton.addEventListener("click", showResult);
ceButton.addEventListener("click", deleteLast);
acButton.addEventListener("click", clearAll);
