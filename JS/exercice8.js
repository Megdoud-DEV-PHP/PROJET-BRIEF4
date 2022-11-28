/* Application du java-script pour la page Exercice-8.html */

function exercice8() {
    let outDiv = document.getElementById("output");
    let age = parseInt(document.getElementById("age").value);

    switch (true) {
        case (age <= 0):
            alert("Le nombre doit être supérieur à 0");
            break;
        case (age <= 13):
            outDiv.innerHTML = "Vous êtes encore trop jeune";
            break;
        case (age >= 13 && age <= 18):
            outDiv.innerHTML = "Vous êtes encore mineur(e)";
            break;
        case (age >= 18 && age <= 25):
            outDiv.innerHTML = "Vous êtes déjà majeur(e)";
            break;
        case (age > 25):
            outDiv.innerHTML = "Vous ne vieillissez donc pas!";
            break;
        default:
            alert("Saisissez un nombre");
    }
}
