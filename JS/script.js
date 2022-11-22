

/* Application du java-script pour la page connexion */

document.getElementById("connexion").addEventListener("submit", function(e) {

var erreur;
var login = document.getElementById("login");
var password = document.getElementById("password");


//Deuxième cas on suppose que le premier champ login n'est pas correcte.

if (password.value != "admin") {
    erreur = "Veuillez renseigner votre mode passe";
}

//Deuxième cas on suppose que le premier champ login n'est pas correcte.

if (login.value != "admin") {
    erreur = "Veuillez renseigner votre login";
}

 // Premier cas on suppose que tous les champs ne sont pas remplis.

 if ((!password.value) && (!login.value)) {
    erreur = "Veuillez renseigner tous les champs";
}



 if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
     } else {
         alert("Formulaire envoyé !");
           }


})



    



