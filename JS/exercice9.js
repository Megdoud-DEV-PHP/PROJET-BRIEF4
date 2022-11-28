function exercice9() {
    let outDiv = document.getElementById("output");
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let ops = document.getElementsByName("op");
    let oneChecked = false;

    for (let i = 0; i < ops.length; i++) {
        if (ops[i].checked) {
            oneChecked = true;
        }
    }

    if (isNaN(n1) || isNaN(n2)) {
        alert("Vous n'avez pas entré les deux nombres");
    } else if (!oneChecked) {
        alert("Vous n'avez pas coché d'opérateur")
    } else {
        switch (true) {
            case (ops[0].checked):
                outDiv.innerHTML = n1 + " + " + n2 + " = " + (n1 + n2);
                break;
            case (ops[1].checked):
                outDiv.innerHTML = n1 + " - " + n2 + " = " + (n1 - n2);
                break;
            case (ops[2].checked):
                outDiv.innerHTML = n1 + " * " + n2 + " = " + (n1 * n2);
                break;
            case (ops[3].checked):
                outDiv.innerHTML = n1 + " / " + n2 + " = " + (n1 / n2);
                break;
            case (ops[4].checked):
                outDiv.innerHTML = n1 + " % " + n2 + " = " + (n1 % n2);
                break;
        }
    }
}
