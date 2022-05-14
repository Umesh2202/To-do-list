const add = document.querySelector(".btn--add");
const addToList = document.querySelector(".add");
const list = document.querySelector(".list");
let number = 1;

add.addEventListener("click", function () {
  let tag = document.createElement("li");
  let text = document.createTextNode(`${number}. ${addToList.value}`);
  tag.appendChild(text);
  console.log(text);
  //   let element = document.querySelector("ul");
  list.appendChild(tag);
  number++;
});
