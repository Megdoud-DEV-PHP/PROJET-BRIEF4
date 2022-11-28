

function exercice11() {
    let outDiv = document.getElementById("output");
    let sum = 0;

    for (let i = 1; i <= 100; i++) {
        let p = document.createElement("p");
        let text = document.createTextNode(sum + " + " + i + " = " + (sum + i));
        p.appendChild(text);
        outDiv.appendChild(p);
        sum += i;
    }
}
