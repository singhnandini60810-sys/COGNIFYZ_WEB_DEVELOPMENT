// ==========================================
// SPELL 01 — COLOUR CHANGING BUTTON/FLOWER
// ==========================================

const colourButton = document.getElementById("colourButton");
const flower = document.getElementById("flower");
const petals = document.querySelectorAll(".petal");
const colourName = document.getElementById("colourName");

const blooms = [
  { colour: "#e9b9c5", name: "fairy rose" },
  { colour: "#cbb9df", name: "moon lavender" },
  { colour: "#b8cbaa", name: "forest sage" },
  { colour: "#f0d5a5", name: "honey glow" },
  { colour: "#b7d2d0", name: "morning mist" }
];

let bloomIndex = 0;

function changeBloom() {

  bloomIndex = (bloomIndex + 1) % blooms.length;

  petals.forEach((petal) => {
    petal.style.backgroundColor = blooms[bloomIndex].colour;
  });

  colourName.textContent =
    `currently: ${blooms[bloomIndex].name}`;
}

colourButton.addEventListener("click", changeBloom);
flower.addEventListener("click", changeBloom);


// ==========================================
// SPELL 02 — TIME-BASED GREETING
// ==========================================

const greetingButton =
  document.getElementById("greetingButton");

greetingButton.addEventListener("click", () => {

  const hour = new Date().getHours();

  let greeting;

  if (hour < 12) {
    greeting =
      "Good morning, little fairy ✧ May your day bloom softly.";
  }

  else if (hour < 17) {
    greeting =
      "Good afternoon ✿ The garden is still glowing for you.";
  }

  else if (hour < 21) {
    greeting =
      "Good evening ✦ The stars are beginning to wake.";
  }

  else {
    greeting =
      "Good night ☾ May your dreams wander somewhere magical.";
  }

  alert(greeting);
});


// ==========================================
// SPELL 03 — ADDITION CALCULATOR
// ==========================================

const calculateButton =
  document.getElementById("calculateButton");

const result =
  document.getElementById("result");

calculateButton.addEventListener("click", () => {

  const numberOne =
    parseFloat(document.getElementById("numberOne").value);

  const numberTwo =
    parseFloat(document.getElementById("numberTwo").value);

  if (
    Number.isNaN(numberOne) ||
    Number.isNaN(numberTwo)
  ) {
    result.textContent = "add two essences ✧";
    return;
  }

  result.textContent = numberOne + numberTwo;
});