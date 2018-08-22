// Cookie based solution
// Another option would be Database
// Cookies now only survive default ammount of time

		var IdNumber = 0; //To ID lines for removing or editing them
		var CookieArray = [];


		function SetCookie(CookieArray){
			document.cookie = CookieArray.join();
		}

// Use existing libary for sanitize
function getCookie(ca) {
			var ca = document.cookie.split(",");
    for(var i = 0; i < ca.length; i++) {
        var c = ca;
				var TrashPicture = document.createElement("IMG");
				TrashPicture.setAttribute("src", "m.jpg"); // Place holder image, made in paint
				TrashPicture.setAttribute("alt", "Remove Line");
				TrashPicture.setAttribute("class", "RemoveIcon");
				TrashPicture.setAttribute("onclick","RemoveLine(this.id)");
				var textnode = document.createTextNode(c[i]);
				var node = document.createElement("LI");
					node.appendChild(textnode);
					node.appendChild(TrashPicture).setAttribute("id", IdNumber);
					document.getElementById("list_output").appendChild(node);
					document.getElementById("list_output").appendChild(node).setAttribute("id",IdNumber);
					IdNumber++;
					CookieArray.push(c[i]);
        }
    };


function checkCookie() {
		document.getElementById("List").focus();
 if (document.cookie != "") {
	 getCookie();
 }
};

function SaveCookies() {
	var blob = new Blob(CookieArray, {type: "text/plain;charset=utf-8"});
	var blobUrl = URL.createObjectURL(blob);
	document.getElementById("Download").href = blobUrl
	document.getElementById("Download").download = "Muistilista.txt"
}

function DeleteCookies(){
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	location.reload();
}

function AddLineFunction(listitem, id) {
		// TODO Smarte way, function? For future smarter dev
		var TrashPicture = document.createElement("IMG");
		TrashPicture.setAttribute("src", "m.jpg"); // Place holder image, made in paint
		TrashPicture.setAttribute("alt", "Remove Line");
		TrashPicture.setAttribute("class", "RemoveIcon");
		TrashPicture.setAttribute("onclick","RemoveLine(this.id)");

		var listitem = document.getElementById("List").value;
		CookieArray.push(listitem);
		document.getElementById("List").value = "";
		document.getElementById("List").focus();
    var node = document.createElement("LI");
    var textnode = document.createTextNode(listitem);
    node.appendChild(textnode);
		node.appendChild(TrashPicture).setAttribute("id", IdNumber);
    document.getElementById("list_output").appendChild(node).setAttribute("id",IdNumber);
		IdNumber++;
		SetCookie(CookieArray);
}

function RemoveLine(clicked_id){
	var elem = document.getElementById(clicked_id);
	elem.parentNode.removeChild(elem);
	CookieArray.splice(clicked_id, 1);
	SetCookie(CookieArray);
}




// Enter sends input so you dont need to click button, its launched first time user selects input field
function EnterEventListener() {
var input = document.getElementById("List");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("HiddenButton").click();
    }
});
}
