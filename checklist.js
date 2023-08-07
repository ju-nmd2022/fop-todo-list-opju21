// for clarification, chatGPT have been used to error check and assisted in explaining the writen code
//so its been though the chat severall times to help find a problem

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
  let parsedListedTaskArray = JSON.parse(localStorage.getItem("todoList"));

  for (let i = 0; i < parsedListedTaskArray.length; i++) {
    let list = document.createElement("li");

    input.classList.add("listClass");
    let arrayTextNode = document.createTextNode(parsedListedTaskArray[i].text);
    list.appendChild(arrayTextNode);
    if (parsedListedTaskArray[i].checked) {
      list.classList.add("checked");
    }
    listed.appendChild(list);
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("buttonClass");
    list.appendChild(deleteButton);
  }
  listedTaskArray = parsedListedTaskArray;
}
renderListedTaskArray();

///CHECKMARK
listed.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
      let taskIndex = Array.from(listed.children).indexOf(event.target);
      let checkmark = event.target.classList.contains("checked");
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
    let inputValue = document.getElementById("addInput").value;
    if (!inputValue) {
      alert("You need to write something");
    } else {
      list.appendChild(document.createTextNode(inputValue));
      listed.appendChild(list);
      input.classList.add("listClass");
      listedTaskArray.push({ text: inputValue, checked: false });
      localStorage.setItem("todoList", JSON.stringify(listedTaskArray));
      input.value = "";
    }
    renderListedTaskArray();
  }
});

/// DELETE BUTTON DELETES
listed.addEventListener("click", function (ev) {
  if (ev.target.tagName === "BUTTON") {
    let taskIndex = Array.from(listed.children).indexOf(ev.target.parentNode);
    listedTaskArray.splice(taskIndex, 1);
    localStorage.setItem("todoList", JSON.stringify(listedTaskArray));
    renderListedTaskArray();
  }
});
