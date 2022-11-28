
function exercice12() {
    let outDiv = document.getElementById("output");
    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");

    for (let i = 0; i <= 10; i++) {
        let row = document.createElement("tr");

        for (let j = 0; j <= 10; j++) {
            let cell = document.createElement("td");
            let data;

            if (i == 0 && j == 0) {
                cell.setAttribute("style", "font-weight: bold");
                data = "x";
            } else if (i == 0 && j != 0) {
                cell.setAttribute("style", "font-weight: bold");
                data = j;
            } else if (i != 0 && j == 0) {
                cell.setAttribute("style", "font-weight: bold");
                data = i;
            } else {
                data = i * j;
            }

            let cellText = document.createTextNode(data);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    outDiv.appendChild(tbl);
    tbl.setAttribute("border", "1");
    tbl.setAttribute("style", "border-collapse: collapse");
}
