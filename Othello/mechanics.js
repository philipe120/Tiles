let a = 4; // row
let b = 6; // column
let c = 1; // turn (odd=white, even=black)

function left(a, b, c) {
    let line = [];
    c = cword(c);

    for (y = b; y >= 1; y--) {
        let element = document.getElementById(`row${a},column${y}`);
        element.classList.remove("white_hover");
        element.classList.remove("black_hover");
        let temp = element.className;
        line.push(temp);
    }

    if (!checkarray(line)) {
        //console.log(line);
    } else {
        let num = calculatearray(line, c);
        console.log(num);
    }

    if (num != false) {
        for (y = b; y >= 1; y--) {
            if (num >= 0) {
                document.getElementById(`row${a},column${y}`).className = c;
                num--;
            } else {
                break;
            }
        }
        turn++;
    }
    document.getElementById("temp2").innerHTML = line;
}

//array stuff
function checkarray(line) {
    if (line[0] != 'grey') {
        return false;
    } else {
        return true;
    }
}

function calculatearray(line, c) {
    for (let k = 1; k <= line.length - 1; k++) {
        if (line[k] == 'grey') {
            return false;
        } else {
            if (c == "black") {
                if (line[k] == 'white' && line[k + 1] == 'black') {
                    return k;
                }
            } else if (c == "white") {
                if (line[k] == 'black' && line[k + 1] == 'white') {
                    return k;
                }
            }
        }
    }
}

function cword(c) {
    if (c % 2 == 1) {
        return "white";
    } else if (c % 2 == 0) {
        return "black";
    } else {
        return "panic";
    }
}