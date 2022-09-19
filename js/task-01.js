const categoriesEl = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesEl.length);

categoriesEl.forEach((item) => {
  console.log(item.firstElementChild.textContent);
  console.log(item.lastElementChild.querySelectorAll("li").length);
});
