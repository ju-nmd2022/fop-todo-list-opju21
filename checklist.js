const myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
function newItem() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("addToList").value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById("list").appendChild(li);
  document.getElementById("addToList").value = "";
}
