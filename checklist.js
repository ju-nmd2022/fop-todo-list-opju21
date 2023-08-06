let listedTasks = [];
let listed = document.getElementById("listedItems"); // makes the ul with id listedItems to a value

// LIST FUNCTION
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    let newListItem = document.createElement("li"); // creates a list element
    const addInput = document.getElementById("addInput").value; // Gets the value from the input feild
    const node = document.createTextNode(addInput); // Create text from the value from the input feild
    newListItem.appendChild(node); // puts the text just made into the list element
    listed.appendChild(newListItem); // makes so the list element is in the ul element which is stated in the beginning

    //listedTasks.push(addInput);
    //localStorage.setItem("list", JSON.stringify(listedTasks));

    input.value = " "; // makes the input feild blank after use
  }
});
