// Eväste pohjainen ratkaisu
// vaihtoehtona olisi tietokanta toteutus
// Keksit säilyvät kyseisen istunnon ajan
// TODO mahdollisuus tallentaa muistilista käyttäjän koneelle
// TODO Lisätä oma Muistilista
		var CookieArray = [];


		function SetCookie(CookieArray){
			document.cookie = CookieArray.join();
		}

// Valmis kirjasta sanitointiin.
function getCookie(ca) {
			var ca = document.cookie.split(",");
    for(var i = 0; i < ca.length; i++) {
        var c = ca;
				var textnode = document.createTextNode(c[i]);
				var node = document.createElement("LI");
					node.appendChild(textnode);
					document.getElementById("list_output").appendChild(node);
        }
					CookieArray.push(ca);
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


function AddLineFunction(listitem) {
		var listitem = document.getElementById("List").value;
		CookieArray.push(listitem);
		document.getElementById("List").value = "";
		document.getElementById("List").focus();
    var node = document.createElement("LI");
    var textnode = document.createTextNode(listitem);
    node.appendChild(textnode);
    document.getElementById("list_output").appendChild(node);
		SetCookie(CookieArray);
}

function SaveCookies(text, name, type) {
  var a = document.getElementById("List");
  var file = new Blob([text], {type: type});
  a.href = URL.createObjectURL(file);
  a.download = name;
}


// Enterillä lähettää inputin
// Ei toimi tällä hetkellä
// TODO  korjaus
var input = document.getElementById("List");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        AddLineFunction();
    }
});
