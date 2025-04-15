console.log("DOM");

const curr = document.querySelector(".js-curr");
// 1.
const deletBtn = document.createElement("button");
deletBtn.innerText = "usuń z koszyka";
curr.parentElement.appendChild(deletBtn);
// 2.
const childArr = [...curr.parentElement.children];
childArr.forEach((element) => {
  if (element) {
    element.classList.add("siblings");
  }
});
// 3.
curr.parentElement.nextElementSibling.setAttribute(
  "title",
  "nextElementSibling"
);
// 4.
const lastArticle = curr.parentElement.parentElement.lastElementChild;
console.log(lastArticle);
const lastArticleBtn = lastArticle.querySelector("button");
const newP = document.createElement("p");
newP.innerText = "---> New text was added with JavaScript right here <---";
lastArticle.insertBefore(newP, lastArticleBtn);
