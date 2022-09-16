const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');
const spanCount = document.querySelector("#value");
let counterValue = 0;

console.log(decrementBtn, incrementBtn, spanCount);
incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  spanCount.textContent = counterValue;
});
decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  spanCount.textContent = counterValue;
});
