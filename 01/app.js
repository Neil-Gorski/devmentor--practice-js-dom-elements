console.log("DOM");
const elCommentsItems = document.querySelectorAll(
  ".comments__item, .comments__item--newest"
);
if (elCommentsItems) {
  console.log(elCommentsItems);
  // const elementsDataInfo = Array.from(elCommentsItems).filter((el) =>
  //   el.hasAttribute("data-info")
  // );
  // console.log(`There are ${elementsDataInfo.length}`);
}
