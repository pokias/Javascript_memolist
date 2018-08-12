// Keksi pohjainen ratkaisu
// vaihtoehtona olisi tietokanta toteutus
// Keksit säilyvät kyseisen istunnon ajan
// TODO mahdollisuus tallentaa muistilista käyttäjän koneelle
// TODO Lisätä oma Muistilista

// Tällä hetkellä vain viimeisin input säilyy
// TODO sisällön sanitointi
function getCookie() {
			var ca =document.cookie
    for(var i = 0; i < ca; i++) {
        var c = ca;
				var textnode = document.createTextNode(c);
				var node = document.createElement("LI");
					node.appendChild(textnode);
					document.getElementById("list_output").appendChild(node);
        }
    };


function checkCookie() {
 if (document.cookie != "") {
	 getCookie();
	 window.alert(document.cookie);
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
