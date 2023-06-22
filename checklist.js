let input = document.getElementById("addInput");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    let listed = document.getElementById("listedItems");
    let newListItem = document.createElement("li");
    const addInput = document.getElementById("addInput").value;
    const node = document.createTextNode(addInput);
    newListItem.appendChild(node);
    listed.appendChild(newListItem);
    input.value = " ";
  }
});
