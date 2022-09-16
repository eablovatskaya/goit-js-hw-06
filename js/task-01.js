const categoriesEl = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesEl.length);

const titleEl = document.querySelectorAll(".item h2");

console.log("Category:", titleEl[0].textContent);
console.log("Category:", categoriesEl[0].querySelectorAll("li").length);
console.log("Category:", titleEl[1].textContent);
console.log("Category:", categoriesEl[1].querySelectorAll("li").length);
console.log("Category:", titleEl[2].textContent);
console.log("Category:", categoriesEl[2].querySelectorAll("li").length);
