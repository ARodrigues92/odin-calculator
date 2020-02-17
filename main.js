const buttons = document.querySelectorAll("button");
const pValue = document.getElementById("value");
let value = "";

function display (){
  pValue.innerHTML = value;
}

buttons.forEach ((button) => {
  button.addEventListener("click",() => {
    value += button.value;
    display();
  });
});