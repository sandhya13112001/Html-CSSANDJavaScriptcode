let counterElement = document.getElementById("counterValue");

function onIncrement() {
  let previousCounterValue = counterElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) + 1;
  if (updatedCounterValue > 0) {
    counterElement.style.color = "green";
  }
  else if (updatedCounterValue < 0) {
    counterElement.style.color = "red";
  }
  else {
    counterElement.style.color = "black";
  }
  counterElement.textContent = updatedCounterValue;
}
function onDecrement() {
  let previousCounterValue = counterElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) -1;
  if (updatedCounterValue > 0) {
    counterElement.style.color = "green";
  }
  else if (updatedCounterValue < 0) {
    counterElement.style.color = "red";
  }
  else {
    counterElement.style.color = "black";
  }
  counterElement.textContent = updatedCounterValue;
}
function onRestart() {
  let previousCounterValue = counterElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue);
  if (updatedCounterValue > 0) {
    counterElement.style.color = "green";
  }
  else if (updatedCounterValue < 0) {
    counterElement.style.color = "red";
  }
  else {
    counterElement.style.color = "black";
  }
  counterElement.textContent = updatedCounterValue;
}