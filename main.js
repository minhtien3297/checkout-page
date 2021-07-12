// construct number1 value
let number1 = document.getElementById("number1");
number1.innerHTML = 1;

// construct number2 value
let number2 = document.getElementById("number2");
number2.innerHTML = 1;

// Increase and decrease number1 value
function increment1() {
  number1.innerHTML++;
}

function decrement1() {
  if (number1.innerHTML > 0) {
    number1.innerHTML--;
  }
}

// Increase and decrease number2 value
function increment2() {
  number2.innerHTML++;
}

function decrement2() {
  if (number2.innerHTML > 0) {
    number2.innerHTML--;
  }
}
