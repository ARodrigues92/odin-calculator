const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const del = document.getElementById("delete");
const dot = document.getElementById("dot");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const displayValue = document.getElementById("value");
const displayOperation = document.getElementById("operation");
let currentValue = "";
let operation = "";
let operationValues = [];
let dotStatus = 0;
let decimals = 0;

function display (){
  displayValue.innerHTML = currentValue;
  displayOperation.innerHTML = operation;
}

function clearValue(){
  displayValue.innerHTML = "";
}

function clearOperatrions(){
  displayOperation.innerHTML = "";
}

function operate (){
  for (let i=1;i<operationValues.length-1;i+=2){
    if (operationValues[i] === "*"){
      operationValues[i-1] = operationValues[i-1] * operationValues[i+1];
      operationValues.splice(i,2);
      i -= 2;
    }else if (operationValues[i] === "/"){
      operationValues[i-1] = operationValues[i-1] / operationValues[i+1];
      operationValues.splice(i,2);
      i -= 2;
    }
  }
  for (i=0;i<operationValues.length;i++){
    if (operationValues[i] === "+"){
      operationValues[i-1] = operationValues[i-1] + operationValues[i+1];
      operationValues.splice(i,2);
      i -= 2;
    }else if (operationValues[i] === "-"){
      operationValues[i-1] = operationValues[i-1] - operationValues[i+1];
      operationValues.splice(i,2);
      i -= 2;
    }
  }
  currentValue = operationValues[0];
}

numberButtons.forEach ((button) => {
  button.addEventListener("click",() => {
    if (dotStatus === 0 && decimals === 0){
      currentValue += button.value;
    }else if(dotStatus === 1 && decimals === 0){
      currentValue += button.value;
      decimals = 1;
    }
    display();
  });
});

operatorButtons.forEach ((button) => {
  button.addEventListener("click",() => {
    operation += currentValue + button.value;
    operationValues.push (parseFloat(currentValue));
    operationValues.push (button.value);
    currentValue = "";
    display();
    clearValue();
  });
});

del.addEventListener ("click", () => {
  currentValue = currentValue.slice(0, -1);
  display();
});

dot.addEventListener ("click", () => {
  if (dotStatus === 0){
    currentValue += dot.value;
    dotStatus = 1;
  }
});

clear.addEventListener ("click", () => {
  currentValue = "";
  operation = "";
  operationValues = [];
  dotStatus = 0;
  decimals = 0;
  clearValue();
  clearOperatrions();
});

equals.addEventListener ("click", () => {
  operationValues.push (parseFloat(currentValue));
  clearValue();
  operate();
  operation = "";
  operationValues.pop();
  display();
});

