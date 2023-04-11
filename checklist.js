let tasks = localStorage.tasks ? JSON.parse(localStorage.tasks) : [];

function newItemToList() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("input").value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  tasks.push(inputValue);
  localStorage.tasks = JSON.stringify(tasks);

  document.getElementById("list").appendChild(li);
  document.getElementById("input").value = "";
  renderList();
}
