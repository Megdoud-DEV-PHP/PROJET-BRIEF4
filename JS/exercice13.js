function exercice13() {
    let outDiv = document.getElementById("output");
    let voiture = new Object();
    let dateString = document.getElementById("dateAchat").value;
    let [jour, mois, annee] = dateString.split('/');

    voiture.marque = document.getElementById("marque").value;
    voiture.anneeFab = parseInt(document.getElementById("anneeFab").value);
    voiture.dateAchat = new Date(annee, parseInt(mois) - 1, parseInt(jour));

    if (voiture.marque == "" || isNaN(voiture.anneeFab) || !(voiture.dateAchat instanceof Date && !isNaN(voiture.dateAchat))) {
        alert("Vous n'avez pas bien rempli tous les champs");
    } else {
        let nomMois = voiture.dateAchat.toLocaleString("default", { month: "long" });
        let dateAchat = voiture.dateAchat.getDate() + " " + nomMois + " " + voiture.dateAchat.getFullYear();
        outDiv.innerHTML = "Marque de la voiture: " + voiture.marque + "<br>" + "Année de fabrication: " + voiture.anneeFab + "<br>" + "Date d'achat: " + dateAchat;
    }
}
