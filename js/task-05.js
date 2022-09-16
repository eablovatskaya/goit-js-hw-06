const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

function onInputChange(event) {
  if (event.currentTarget.value.trim()) {
    spanEl.textContent = event.currentTarget.value.trim();
  } else {
    spanEl.textContent = "Anonymous";
  }
}

inputEl.addEventListener("input", onInputChange);
