let listedTaskArray = JSON.parse(localStorage.getItem("todoList"));
if (!listedTaskArray) {
  listedTaskArray = [];
  localStorage.setItem("todoList", JSON.stringify(listedTaskArray));
}
let jsonStringListedTaskArray = JSON.stringify(listedTaskArray);
let listed = document.getElementById("listedItems");

let input = document.getElementById("addInput");
///LOAD THE LIST
function renderListedTaskArray() {
  listed.innerHTML = "";
  const storedListedTaskArray = localStorage.getItem("todoList");
  const parsedListedTaskArray = JSON.parse(storedListedTaskArray);

  for (let i = 0; i < parsedListedTaskArray.length; i++) {
    let list = document.createElement("li");
    let arrayTextNode = document.createTextNode(parsedListedTaskArray[i].text);
    list.appendChild(arrayTextNode);
    if (parsedListedTaskArray[i].checked) {
      list.classList.add("checked");
    }
    listed.appendChild(list);
  }
  listedTaskArray = parsedListedTaskArray;
}
renderListedTaskArray();

///CHECKMARK

listed.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
      const taskIndex = Array.from(listed.children).indexOf(ev.target);
      const checkmark = ev.target.classList.contains("checked");
      listedTaskArray[taskIndex].checked = checkmark;

      localStorage.setItem("todoList", JSON.stringify(listedTaskArray));
    }
  },
  false
);
////// ADD TO LIST FUNCTION
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    let list = document.createElement("li");
    let inputValue = input.value;
    let textNode = document.createTextNode(inputValue);
    list.appendChild(textNode);
    listed.appendChild(list);
    let arrayNewTask = { text: inputValue, checked: false };
    listedTaskArray.push(arrayNewTask);
    localStorage.setItem("todoList", JSON.stringify(listedTaskArray));
    input.value = "";
    renderListedTaskArray();
  }
});
