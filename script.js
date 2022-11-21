/*
document.getElementById("connexion").addEventListener("submit", function(e) {
var erreur;
var login = document.getElementById("login");
var password = document.getElementById("password");



if (password.value != "admin") {
    erreur = "Veuillez renseigner votre mode pass";
}

if (login.value != "admin") {
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

*/
document.getElementById("connexion").addEventListener("submit", function(e) {
    var erreur;
    var inputs = document.getElementsByTagName("input"); 
    console.log(inputs);
    for (var i = 0; i < inputs.length; i++) {
        if(!inputs[i].value) 
    }

})

