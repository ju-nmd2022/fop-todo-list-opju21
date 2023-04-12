const id = (x) => {
  return document.getElementById(x);
};
let tasks = localStorage.tasks ? JSON.parse(localStorage.tasks) : [];
let list = document.getElementById("list");
const renderList = () => {
  list.innerHTML = ``;
  for (let i = 0; i < tasks.length; i++) {
    const checked = tasks[i].checked ? "checked" : "";
    list.innerHTML += `<li type="checkbox" class="${checked}"  data-checked="${tasks[i].checked}"><span class="listText">${tasks[i].text}</span> <div class="close" onclick="deleteItem(${i})">x</div></li>`;
  }
};
renderList();
// from w3schools
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");

      // to solve this i used chatgpt bc i was lost af
      const index = Array.from(list.children).indexOf(ev.target);
      const li = list.children[index];
      const isChecked = li.classList.contains("checked");
      tasks[index].checked = isChecked;
      tasks[index].text = ev.target.querySelector(".listText").textContent;
      localStorage.tasks = JSON.stringify(tasks);
    }
  },
  false
);
function newItemToList() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("input").value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === "") {
    alert("Error");
  } else {
    document.getElementById("list").appendChild(li);
    tasks.push({ text: inputValue, checked: false });
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
    alert("Error");
  }
};
