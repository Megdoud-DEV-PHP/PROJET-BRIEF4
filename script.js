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



    // deuxième façon de réaliser la validation du formulaire en javascript avec la boucle for en considérant l'élement html input comme un une variable d'un tableau.
    /*
    document.getElementById("connexion").addEventListener("submit", function(e) {
    var erreur;
    var inputs = document.getElementById("connexion").getElementsByTagName("input"); 
    console.log(inputs);
    for ( var i = 0; i < inputs.length; i++) {
       
        
        if(!inputs["password"].value != "admin") {
            erreur = "Votre mode de passe est incorrecte !";
        }

        if(!inputs["login"].value != "admin") {
            erreur = "Votre login est incorrecte !";
        }

        if(!inputs[i].value) {
            erreur = "Veuillez renseigner tous les champs";
        }

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

/* Application du java-script pour la page Exercice-1.html */

    document.getElementById("execution").addEventListener("submit", function() {
    var vide;
    var information = document.getElementById("information");
    var information1 = document.getElementById("information1");
    var information2 = document.getElementById("information2");
   
   
    var messages = information.value + information1.value + information2.value;
    console.log(messages);
    
    

})




