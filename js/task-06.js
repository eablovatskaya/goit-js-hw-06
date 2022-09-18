const inputEl = document.querySelector("#validation-input");

const inputLen = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", () => {
  if (inputLen === inputEl.value.length) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
});
