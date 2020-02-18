const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const del = document.getElementById("delete");
const dot = document.getElementById("dot");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const pValue = document.getElementById("value");
let currentValue = "";
let dotStatus = 0;
let decimals = 0;

function display (){
  pValue.innerHTML = currentValue;
}

numberButtons.forEach ((button) => {
  button.addEventListener("click",() => {
    console.log(button.value);
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
    console.log(button.value);
  });
});

del.addEventListener ("click", () => {
  console.log(del.value);
  currentValue = currentValue.slice(0, -1);
  display();
})

dot.addEventListener ("click", () => {
  console.log(dot.value);
  if (dotStatus === 0){
    currentValue += dot.value;
    dotStatus = 1;
  }
})

clear.addEventListener ("click", () => {
  console.log(clear.value);
})

equals.addEventListener ("click", () => {
  console.log(equals.value);
})

