let listed = document.getElementById("listedItems");

// LIST FUNCTION
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    let list = document.createElement("li");
    let input = document.getElementById("addInput").value;
    let textNode = document.createTextNode(input);
    list.appendChild(textNode);
    listed.appendChild(list);
    document.getElementById("addInput").value = "";
  }
});
