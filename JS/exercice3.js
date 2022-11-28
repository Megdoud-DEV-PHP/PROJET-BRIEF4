function calcul(){
    prenom = document.getElementById("information").value;
    classe = document.getElementById("information1").value;
    
    if(prenom != "" && classe != "")
    document.getElementById("resultati").innerHTML="Bonjour " + prenom + ", votre classe est " 
    + classe + " .";
    else
    alert("Erreur, veuillez rafraichir la page et remplir les champs demandés.") ;
    };
