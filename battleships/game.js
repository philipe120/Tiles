function genGrid() {
    // deletes the launch button and its containing row
    $('#launch').remove();

    // creates an x by y table
    let grid = "<table id='grid'>";
    for (let y = 9; y >= 0; y--) {
        grid += `<tr class='y${y}'>`;
        for (let x = 0; x <= 9; x++) {
            grid += `<td class='x${x}'></td>`;
        }
        grid += "</tr>";
    }
    grid += "</table>";
    $('#battlefield').append(grid);
    console.log("Battlefield generated.");
}

$(document).ready(function () {
    $('#launch').click(genGrid);
    //$('#grid').mouseover(gridDetect);
});