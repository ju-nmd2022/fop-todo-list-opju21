const id = (x) => {
  return document.getElementById(x);
};
let tasks = localStorage.tasks ? JSON.parse(localStorage.tasks) : [];
let list = document.getElementById("list");
const renderList = () => {
  list.innerHTML = ``;
  for (let i = 0; i < tasks.length; i++) {
    list.innerHTML += `<li><div class="listText">${tasks[i]}</div> <div class="close" onclick="deleteItem(${i})">x</div></li>`;
  }
};
renderList();

function newItemToList() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("input").value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === "") {
    alert("Error");
  } else {
    document.getElementById("list").appendChild(li);
    tasks.push(inputValue);
    localStorage.tasks = JSON.stringify(tasks);
  }

  document.getElementById("input").value = "";
  renderList();
}
const deleteItem = (index) => {
  let item = tasks[index];
  if (item != undefined) {
    tasks.splice(index, 1);
    localStorage.tasks = JSON.stringify(tasks);
    renderList();
  } else {
    alert("error");
  }
};
// from w3schools
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);
