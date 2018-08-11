
function getCookie() {
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
				var textnode = document.createTextNode(c);
				var node = document.createElement("LI");
      //  while () {
					node.appendChild(textnode);
					document.getElementById("list_output").appendChild(node);
        }
    };

function checkCookie() {
 if (document.cookie != "") {
	 getCookie();
 }
};

function DeleteCookies(){
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	location.reload();
}


function AddLineFunction() {
		var listitem = document.getElementById("List").value;
		document.cookie = listitem;
		document.getElementById("List").value = "";
    var node = document.createElement("LI");
    var textnode = document.createTextNode(listitem);
    node.appendChild(textnode);
    document.getElementById("list_output").appendChild(node);

}

// Enter to submit line
// TODO korjaa
var input = document.getElementById("List");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        AddLineFunction();
    }
});
