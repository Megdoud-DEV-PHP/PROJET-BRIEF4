/* Application du java-script pour la page Exercice-1.html */


document.getElementById("execution").addEventListener("submit", function(e) {
    var vide;
    var information = document.getElementById("information");
    var information1 = document.getElementById("information1");
    var information2 = document.getElementById("information2");
    var messages = information.value + information1.value + information2.value;


    if ((!information2.value) && (!information1.value) && (!information.value)) 
    {
    vide = "Veuillez remplir les champs de saisie";
    }
    
    

    
    if (vide) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = vide;
        return false;
     } else {
        alert(information.value + ", " + information1.value + ", " + information2.value + " .");
           }

   

})


   
