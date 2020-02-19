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
let result = 0; // used to check if displayed value is a result or introduction by user

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

function clearAll(){
  currentValue = "";
  operation = "";
  operationValues = [];
  dotStatus = 0;
  decimals = 0;
  clearValue();
  clearOperatrions();
}

function operate (){
  for (let i=1;i<operationValues.length-1;i+=2){
    if (operationValues[i] === "*"){
      operationValues[i-1] = Math.round((operationValues[i-1] * operationValues[i+1])*10)/10;
      operationValues.splice(i,2);
      i -= 2;
    }else if (operationValues[i] === "/"){
      if(operationValues[i+1] > 0){
        operationValues[i-1] = Math.round((operationValues[i-1] / operationValues[i+1])*10)/10;
        operationValues.splice(i,2);
        i -= 2;
      }else{
        clearAll();
        alert("You can't divide by 0 you dummy!")
        return;
      }
    }
  }
  for (i=0;i<operationValues.length;i++){
    if (operationValues[i] === "+"){
      operationValues[i-1] = Math.round((operationValues[i-1] + operationValues[i+1])*10)/10;
      operationValues.splice(i,2);
      i -= 2;
    }else if (operationValues[i] === "-"){
      operationValues[i-1] = Math.round((operationValues[i-1] - operationValues[i+1])*10)/10;
      operationValues.splice(i,2);
      i -= 2;
    }
  }
  currentValue = operationValues[0];
}

numberButtons.forEach ((button) => {
  button.addEventListener("click",() => {
    if(result === 0){
      if (dotStatus === 0 && decimals === 0){
        currentValue += button.value;
      }else if(dotStatus === 1 && decimals === 0){
        currentValue += button.value;
        decimals = 1;
      }
    display()
    }
  });
});

operatorButtons.forEach ((button) => {
  button.addEventListener("click",() => {
    operation += currentValue + button.value;
    operationValues.push (parseFloat(currentValue));
    operationValues.push (button.value);
    currentValue = "";
    dotStatus = 0;
    decimals = 0;
    result = 0;
    display();
    clearValue();
  });
});

del.addEventListener ("click", () => {
  if(result === 0){
    if(decimals === 1){
      decimals = 0;
    }
    if (currentValue[currentValue.length-1] === "."){
      dotStatus = 0;
    }
    if(operation.length>0){ //checks if the displayed value is a result or introduction by user
      currentValue = currentValue.slice(0, -1);
      display();
    }
  }
});

dot.addEventListener ("click", () => {
  if (result === 0){
    if (dotStatus === 0){
      currentValue += dot.value;
      dotStatus = 1;
      display();
    }
  }
});

clear.addEventListener ("click", () => {
  clearAll();
});

equals.addEventListener ("click", () => {
  operationValues.push (parseFloat(currentValue));
  clearValue();
  operate();
  operation = "";
  result = 1;
  operationValues.pop();
  display();
});

document.addEventListener('keydown', key => {
  button = document.querySelector(`button[data-code="${event.keyCode}"]`)
  if (typeof buttton !== "undefine"){
      button.click();
  }
});
