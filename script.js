document.getElementById("connexion").addEventListener("submit", function(e) {
e.preventDefault();
var erreur;
var login = document.getElementById("login");
var login = document.getElementById("password");
if (!login.value) {
    erreur = "Veuillez renseigner votre login";
}

if (!password.value) {
    erreur = "Veuillez renseigner votre mode pass";
}
if (erreur) {
 e.preventDefault();
 document.getElementById("erreur").innerHTML = erreur;
 return false;
} else {
    alert("Formulaire envoyé !");
}



})
