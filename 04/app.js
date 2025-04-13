console.log("DOM");

// struktura do wykorzystania w pętli
const menuItems = [
  { text: "start", url: "/" },
  { text: "galeria", url: "/gallery" },
  { text: "kontakt", url: "/contact" },
];

const nav = document.querySelector("nav");
const uList = document.createElement("ul");
nav.appendChild(uList);

for (let i = 0; i < menuItems.length; i++) {
  const lItem = document.createElement("li");
  const aItem = document.createElement("a");
  lItem.appendChild(aItem);
  aItem.href = menuItems[i].url;
  aItem.innerText = menuItems[i].text;
  uList.appendChild(lItem);
}
