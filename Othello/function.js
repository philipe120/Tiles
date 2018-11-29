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

    if (turn%2==1){
        let element = document.getElementById(`row${a},column${b}`);
        element.classList.add("white_hover");
    }else if (turn%2==0){
        let element = document.getElementById(`row${a},column${b}`);
        element.classList.add("black_hover");
    }
}

function mouseoff(a, b) {

    let element = document.getElementById(`row${a},column${b}`);
    element.classList.remove("white_hover");
    element.classList.remove("black_hover");
}

function mouseclick(a, b) {

    left(a, b, turn);
    console.log(addturn);
    right(a, b, turn);
    console.log(addturn);
    up(a, b, turn);
    console.log(addturn);
    down(a, b, turn);
    console.log(addturn);
    
    // clicked = true;
    if (addturn) {
        writeself(a, b, turn);
        //reset stuff
        turn++;
        addturn = false;
    }
}