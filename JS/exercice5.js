function calcul(){
    jour = document.getElementById("information").value
        jours_semaine = []

        jours_semaine [1] = "Lundi";
        jours_semaine [2] = "Mardi";
        jours_semaine [3] = "Mercredi";
        jours_semaine [4] = "Jeudi";
        jours_semaine [5] = "Vendredi";
        jours_semaine [6] = "Samedi";
        jours_semaine [7] = "Dimanche";

        if (jour<1 || jour>7)
            {document.getElementById("resultati").innerHTML= "erreur"};
        document.getElementById("resultati").innerHTML="Le jour correspondant au chiffre " 
        + jour + " est " + jours_semaine [jour];
}


