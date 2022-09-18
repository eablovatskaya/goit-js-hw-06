const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');
const spanCount = document.querySelector("#value");
let counterValue = 0;

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  spanCount.textContent = counterValue;
});
decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  spanCount.textContent = counterValue;
});
