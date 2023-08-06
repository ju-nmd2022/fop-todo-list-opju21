let listedTaskArray = [];
let jsonStringListedTaskArray = JSON.stringify(listedTaskArray);
let listed = document.getElementById("listedItems");

let input = document.getElementById("addInput");

// LIST FUNCTION
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    let list = document.createElement("li");
    let inputValue = input.value;
    let textNode = document.createTextNode(inputValue);
    list.appendChild(textNode);
    listed.appendChild(list);
    listedTaskArray.push(inputValue);
    localStorage.setItem("todoList", JSON.stringify(listedTaskArray));
    input.value = "";
  }
});
