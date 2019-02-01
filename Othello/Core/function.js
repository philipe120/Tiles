let clicked = false;
let turn = 1;
let addturn = false;
let single = true;
let pass = 0;

function start() {
    let grid = "<table class = 'test'><tr>";
    for (let x = 1; x <= 8; x++) {
        for (let y = 1; y <= 8; y++) {
            grid += `<td class='grey' onmouseover='mouseon(${x},${y})' onmouseout='mouseoff(${x},${y})' 
            onclick = 'mouseclick(${x},${y})' id = 'row${x},column${y}'><div class = "space">
            </div></td>`;
        }
        if (x != 8) {
            grid += `</tr id = 'row${x}'><tr>`;
        }
    }
    grid += `</tr></table><div class = "button"><button id = "automove" onclick="automove()">Auto Move</button>
    <button onclick="reset()">Reset</button></div>`;

    document.getElementById("demo").innerHTML = grid;

    document.getElementById(`row4,column4`).className = "white";
    document.getElementById(`row5,column5`).className = "white";
    document.getElementById(`row4,column5`).className = "black";
    document.getElementById(`row5,column4`).className = "black";
}

function mouseon(a, b) {

    if (turn == "end"){

    }else if (turn%2==1){
        let element = document.getElementById(`row${a},column${b}`);
        element.classList.add("black_hover");
    }else if (turn%2==0){
        let element = document.getElementById(`row${a},column${b}`);
        element.classList.add("white_hover");
    }
}

function mouseoff(a, b) {
    let element = document.getElementById(`row${a},column${b}`);
    element.classList.remove("white_hover");
    element.classList.remove("black_hover");
    element.classList.remove("panic");
}

function mouseclick(a, b) {

    left(a, b, turn);
    right(a, b, turn);
    up(a, b, turn);
    down(a, b, turn);
    upleft(a, b, turn);
    upright(a, b, turn);
    downleft(a, b, turn);
    downright(a, b, turn);

    if (addturn) {
        writeself(a, b, turn);

        turn++;
        scangrid(turn);
        if (pass == 1){
            turn++;
            document.getElementById("legal").innerHTML = `Pass`;
            scangrid(turn);
        }
        addturn = false;

        if (turn == "end"){
            winner = countgrid();
            if (winner != "Tie"){
                document.getElementById("legal").innerHTML = `${winner} wins!`;
            }else{
                document.getElementById("legal").innerHTML = `It is a tie!`;
            }
        }

        if (turn%2==0 && single){
            friend();
        }
    }
}