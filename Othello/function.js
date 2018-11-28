let clicked = false;
let started = false;
let turn = 1;
let addturn = false;

function start() {
    if (!started) {
        let grid = "<table><tr>";

        for (let x = 1; x <= 8; x++) {
            for (let y = 1; y <= 8; y++) {
                grid += `<td class='grey' onmouseover='mouseon(${x},${y})' onmouseout='mouseoff(${x},${y})' 
                onclick = 'mouseclick(${x},${y})' id = 'row${x},column${y}'></td>`;
            }
            if (x != 8) {
                grid += `</tr id = 'row${x}'><tr>`;
            }
        }

        grid += "</tr></table>";

        document.getElementById("demo").innerHTML = grid;
        started = true;

        document.getElementById(`row4,column4`).className = "white";
        document.getElementById(`row5,column5`).className = "white";
        document.getElementById(`row4,column5`).className = "black";
        document.getElementById(`row5,column4`).className = "black";
    }
}

function mouseon(a, b) {
    if (clicked) {

    } else {
        let element = document.getElementById(`row${a},column${b}`);
        element.classList.add("white_hover");
    }
}

function mouseoff(a, b) {
    if (clicked) {

    } else {
        let element = document.getElementById(`row${a},column${b}`);
        element.classList.remove("white_hover");
        console.log(a + '\n' + b);
    }
}

function mouseclick(a, b) {
    left(a, b, turn);
    right(a, b, turn);
    // clicked = true;
    if (addturn) {
        turn++;
    }
    console.log(a + '\n' + b);
}