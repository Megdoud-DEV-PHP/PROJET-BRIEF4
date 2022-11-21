
document.getElementById("connexion").addEventListener("submit", function(e) {
e.preventDefault();

var erreur;
var login = document.getElementById("login");
var password = document.getElementById("password");



if (!password.value) {
    erreur = "Veuillez renseigner votre mode pass";
}

if (!login.value) {
    erreur = "Veuillez renseigner votre login";
}

if (erreur) {
   e.preventDefault();
   document.getElementById("erreur").innerHTML = erreur;
   return false;
} else {
    alert("Formulaire envoyé !");
      }



})
