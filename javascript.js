function myFunction() {
		var x = document.getElementById("#List").value;
		document.getElementById("#List").value = "";
    var node = document.createElement("LI");
    var textnode = document.createTextNode(x);
    node.appendChild(textnode);
    document.getElementById("#output").appendChild(node);
}
var input = document.getElementById("#List");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("#HiddenButton").click();
    }
});
