
function AddLineFunction() {
		var listitem = document.getElementById("List").value;
		document.getElementById("List").value = "";
    var node = document.createElement("LI");
    var textnode = document.createTextNode(listitem);
    node.appendChild(textnode);
    document.getElementById("list_output").appendChild(node);
}

// Enter to submit line
var input = document.getElementById("List");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        AddLineFunction();
    }
});
