const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const del = document.getElementById("delete");
const dot = document.getElementById("dot");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const pValue = document.getElementById("value");
let currentValue = "";

function display (){
  pValue.innerHTML = currentValue;
}

numberButtons.forEach ((button) => {
  button.addEventListener("click",() => {
    console.log(button.value);
    currentValue += button.value;
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
})

dot.addEventListener ("click", () => {
  console.log(dot.value);
})

clear.addEventListener ("click", () => {
  console.log(clear.value);
})

equals.addEventListener ("click", () => {
  console.log(equals.value);
})

