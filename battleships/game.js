function genGrid() {
    let grid = "<table class='container-fluid'><tbody>";
    for (let i = 1; i <= 10; i++) {
        grid += "<tr>";
        for (let x = 1; x <= 10; x++) {
            grid += "<td></td>";
        }
        grid += "</tr>";
    }
    grid += "</tbody></table>";
    $('#game').append(grid);
    console.log("Battlefield generated.");
}

$(document).ready(function () {
    $('#launch').click(genGrid);
});