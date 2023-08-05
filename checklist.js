let input = document.getElementById("addInput"); // the input feild id made into a value
let listed = document.getElementById("listedItems"); // makes the ul with id listedItems to a value

function addCloseButton(newListItem) {
  const closeButton = document.createElement("button"); // this creates an btton element

  closeButton.className = "deleteItemClass"; //This gives it a class
  closeButton.innerText = "X"; //this just makes the x in the button

  closeButton.addEventListener("click", function () {
    listed.removeChild(newListItem); //if button is pressed this takes away the element / listitem
  });
  newListItem.appendChild(closeButton); // connects the closebutton to the list item
}

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    let newListItem = document.createElement("li"); // creates a list element
    const addInput = document.getElementById("addInput").value; // Gets the value from the input feild
    const node = document.createTextNode(addInput); // Create text from the value from the input feild
    newListItem.appendChild(node); // puts the text just made into the list element
    listed.appendChild(newListItem); // makes so the list element is in the ul element which is stated in the beginning
    input.value = " "; // makes the input feild blank after use
    addCloseButton(newListItem); //connects the list item to a close button
  }
});

let listItems = document.getElementsByTagName("li"); // looks att all the li elements

for (let i = 0; i < listItems.length; i++) {
  //adds closebuttons to existing elements
  addCloseButton(listItems[i]);
}
