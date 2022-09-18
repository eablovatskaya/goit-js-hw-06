function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const butEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

butEl.addEventListener("click", onButtonClick);

function onButtonClick() {
  const colorBac = getRandomHexColor();

  body.style.backgroundColor = colorBac;
  spanEl.textContent = colorBac;
}
