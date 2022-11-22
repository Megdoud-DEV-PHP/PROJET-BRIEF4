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
    var inputs = document.getElementById("connexion").getElementsByTagName("input"); 
    console.log(inputs);
    for ( var i = 0; i < inputs.length; i++) {
       
        if(!inputs[i].value) {
            erreur = "Veuillez renseigner tous les champs";
        }

        if(!inputs["password"].value != "admin") {
            erreur = "Votre mode de passe est incorrecte !";
        }

        if(!inputs["login"].value != "admin") {
            erreur = "Votre login est incorrecte !";
        }

        if (erreur) {
            e.preventDefault();
            document.getElementById("erreur").innerHTML = erreur;
            return false;
         } else {
             alert("Formulaire envoyé !");
               }
        
    }

   
  
})




