const btn = document.getElementById("btn");
const colorNumber = document.querySelector(".colorNumber");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", () => {
  let hexColor = getHexColor();
  document.body.style.backgroundColor = hexColor;
  colorNumber.textContent = hexColor;
});

function getHexColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  return hexColor;
}

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
