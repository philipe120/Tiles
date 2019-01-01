// a,x,j are row variables
// b,y,k are column variables
// turn (odd=white, even=black)

function left(a, b, c) {
    let line = [];
    for (let y = b; y >= 1; y--) {
        line = scanline(a,y,line);
    }

    if (calculatearray(line, c)){
        for (let y = b; y >= 1; y--) {
            let element = document.getElementById(`row${a},column${y}`).className;
            if (element == cword(c)) {
                break;
            } else if (element == cword(c + 1)) {
                document.getElementById(`row${a},column${y}`).className = cword(c);
            }
        }
        addturn = true;
    }
}

function right(a, b, c) {
    let line = [];
    for (let y = b;y <= 8;y++) {
        line = scanline(a,y,line);
    }

    if (calculatearray(line, c)){
        for (let y = b;y <= 8;y++) {
            let element = document.getElementById(`row${a},column${y}`).className;
            if (element == cword(c)) {
                break;
            } else if (element == cword(c + 1)) {
                document.getElementById(`row${a},column${y}`).className = cword(c);
            }
        }
        addturn = true;
    }
}

function up(a,b,c){
    line=[];
    for (let x = a;x >= 1;x--){
        line = scanline(x,b,line);
    }

    if (calculatearray(line, c)){
        for (let x = a;x >= 1; x--){
            let element = document.getElementById(`row${x},column${b}`).className;
            if (element == cword(c)) {
                break;
            } else if (element == cword(c + 1)) {
                document.getElementById(`row${x},column${b}`).className = cword(c);
            }
        }
        addturn = true;
    }
}

function down(a,b,c){
    line=[];
    for (let x = a;x <= 8;x++){
        line = scanline(x,b,line);
    }

    if (calculatearray(line, c)){
        for (let x = a;x <= 8;x++){
            let element = document.getElementById(`row${x},column${b}`).className;
            if (element == cword(c)) {
                break;
            } else if (element == cword(c + 1)) {
                document.getElementById(`row${x},column${b}`).className = cword(c);
            }
        }
        addturn = true;
    }
}

function upleft(a, b, c) {
    let line = [];
    for (let x = a;x >= 1;x--){
        for (let y = b; y >= 1; y--) {
            if (a-b == x-y){
                line = scanline(x,y,line);
            }
        }
    }

    if (calculatearray(line, c)){
        breakloop:
        for (let x = a;x >= 1;x--){
            for (let y = b; y >= 1; y--) {
                if (a-b == x-y){
                    let element = document.getElementById(`row${x},column${y}`).className;
                    if (element == cword(c)) {
                        break breakloop;
                    } else if (element == cword(c + 1)) {
                        document.getElementById(`row${x},column${y}`).className = cword(c);
                    }
                }
            }
        }
        addturn = true;
    }
}

function upright(a, b, c) {
    let line = [];
    for (let x = a;x >= 1;x--){
        for (let y = b; y <= 8; y++) {
            if (a+b == x+y){
                line = scanline(x,y,line);
            }
        }
    }

    if (calculatearray(line, c)){
        breakloop:
        for (let x = a;x >= 1;x--){
            for (let y = b; y <= 8; y++) {
                if (a+b == x+y){
                    let element = document.getElementById(`row${x},column${y}`).className;
                    if (element == cword(c)) {
                        break breakloop;
                    } else if (element == cword(c + 1)) {
                        document.getElementById(`row${x},column${y}`).className = cword(c);
                    }
                }
            }
        }
        addturn = true;
    }
}

function downleft(a, b, c) {
    let line = [];
    for (let x = a;x <= 8;x++){
        for (let y = b; y >= 1; y--) {
            if (a+b == x+y){
                line = scanline(x,y,line);
            }
        }
    }

    if (calculatearray(line, c)){
        breakloop:
        for (let x = a;x <= 8;x++){
            for (let y = b; y >= 1; y--) {
                if (a+b == x+y){
                    let element = document.getElementById(`row${x},column${y}`).className;
                    if (element == cword(c)) {
                        break breakloop;
                    } else if (element == cword(c + 1)) {
                        document.getElementById(`row${x},column${y}`).className = cword(c);
                    }
                }
            }
        }
        addturn = true;
    }
}

function downright(a, b, c) {
    let line = [];
    for (let x = a;x <= 8;x++){
        for (let y = b; y <= 8; y++) {
            if (a-b == x-y){
                line = scanline(x,y,line);
            }
        }
    }
    
    if (calculatearray(line, c)){
        breakloop:
        for (let x = a;x <= 8;x++){
            for (let y = b; y <= 8; y++) {
                if (a-b == x-y){
                    let element = document.getElementById(`row${x},column${y}`).className;
                    if (element == cword(c)) {
                        break breakloop;
                    } else if (element == cword(c + 1)) {
                        document.getElementById(`row${x},column${y}`).className = cword(c);
                    }
                }
            }
        }
        addturn = true;
    }
}

function writeself(a, b, c) {
    document.getElementById(`row${a},column${b}`).className = cword(c);
}


function cword(c) {
    if (c % 2 == 1) {
        return "black";
    } else if (c % 2 == 0) {
        return "white";
    } else {
        return "panic";
    }
}


//check if the line is legal or not
function calculatearray(line, c) {
    if (line.length>=2){
        for (k=1;k<=line.length-1;k++){
            if (line[0] != 'grey'){
                //console.log("grey");
                return false;
            }else if (line[k-1]==cword(c+1) && line[k]==cword(c)){
                //console.log("true");
                return true;
            }else if (line[k]=='grey' || line[k]==cword(c)){
                //console.log("end");
                return false;
            }else{
                //console.log("skip");
            }
        }
    }else{
        return false;
    }
}


function scanline(j,k,line){
    let element = document.getElementById(`row${j},column${k}`);
    element.classList.remove("white_hover");
    element.classList.remove("black_hover");
    line.push(element.className);
    return line;
}

function countarray(){


}