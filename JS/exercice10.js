
function exercice10() {
    let outDiv = document.getElementById("output");
    let t = parseInt(document.getElementById("taille").value);
    let a = parseInt(document.getElementById("age").value);
    let s = document.getElementById("sexe").value;

    if (isNaN(t) || isNaN(a) || ((s != "homme") && (s != "femme"))) {
        alert("Vous n'avez pas bien rempli tous les champs");
    } else {
        if (s == "homme") {
            outDiv.innerHTML = "Poids idéal: " + ((3 * t - 250) * (a + 270) / 1200);
        } else if (s == "femme") {
            outDiv.innerHTML = "Poids idéal: " + ((t / 2 - 30) * (180 + 1) / 200);
        }
    }
}
