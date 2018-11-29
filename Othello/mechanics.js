// a,x,j are row variables
// b,y,k are column variables
// turn (odd=white, even=black)

function left(a, b, c) {
    let line = [];

    for (let y = b; y >= 1; y--) {
        let element = document.getElementById(`row${a},column${y}`);
        element.classList.remove("white_hover");
        element.classList.remove("black_hover");
        line.push(element.className);
    }

    console.log(line);
    let num = calculatearray(line, c);
    console.log(num);
    
    if (num != false) {
        for (let y = b; y >= 1; y--) {
            let element = document.getElementById(`row${a},column${y}`).className;
            if (element == cword(c)) {
                //console.log("break");
                break;
            } else if (element == cword(c + 1)) {
                //console.log("set");
                document.getElementById(`row${a},column${y}`).className = cword(c);
            } else if (element == "grey") {
                //console.log("grey");
            } else {
                //console.log("error");
            }
        }
        addturn = true;
    }
}

function right(a, b, c) {
    let line = [];

    for (let y = b; y <= 8; y++) {
        let element = document.getElementById(`row${a},column${y}`);
        element.classList.remove("white_hover");
        element.classList.remove("black_hover");
        line.push(element.className);
    }

    console.log(line);
    let num = calculatearray(line, c);
    console.log(num);

    if (num != false) {
        for (let y = b; y <= 8; y++) {
            let element = document.getElementById(`row${a},column${y}`).className;
            if (element == cword(c)) {
                //console.log("break");
                break;
            } else if (element == cword(c + 1)) {
                //console.log("set");
                document.getElementById(`row${a},column${y}`).className = cword(c);
            } else if (element == "grey") {
                //console.log("grey");
            } else {
                //console.log("error");
            }
        }
        addturn = true;
    }
}

///////////////////////////fix////////////////////////////////////




function up(a,b,c){
    line=[];

    for (x=a;x>=1;x--){
        element = document.getElementById(`row${x},column${b}`);
        element.classList.remove("white_hover");
        element.classList.remove("black_hover");
        line.push(element.className);
    }

    console.log(line);
    let num = calculatearray(line, c);
    console.log(num);

    if (num !=false){
        for (x=a;x>=1;x--){
            let element = document.getElementById(`row${x},column${b}`).className;
            if (element == cword(c)) {
                //console.log("break");
                break;
            } else if (element == cword(c + 1)) {
                //console.log("set");
                document.getElementById(`row${x},column${b}`).className = cword(c);
            } else if (element == "grey") {
                //console.log("grey");
            } else {
                //console.log("error");
            }
        }
        addturn = true;
    }
}



function down(a,b,c){
    line=[];

    for (x=a;x<=8;x++){
        element = document.getElementById(`row${x},column${b}`);
        element.classList.remove("white_hover");
        element.classList.remove("black_hover");
        line.push(element.className);
    }

    console.log(line);
    let num = calculatearray(line, c);
    console.log(num);

    if (num !=false){
        for (x=a;x<=8;x++){
            let element = document.getElementById(`row${x},column${b}`).className;
            if (element == cword(c)) {
                //console.log("break");
                break;
            } else if (element == cword(c + 1)) {
                //console.log("set");
                document.getElementById(`row${x},column${b}`).className = cword(c);
            } else if (element == "grey") {
                //console.log("grey");
            } else {
                //console.log("error");
            }
        }
        addturn = true;
    }
}


function writeself(a, b, c) {
    c = cword(c);
    document.getElementById(`row${a},column${b}`).className = c;
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


//check if the line is legal or not
function calculatearray(line, c) {
    for (k=1;k<=line.length-1;k++){
        if (line[0] != 'grey'){
            return false;
        }else if (line[k]=='grey'){
            return false;
        }else if (line[k-1]==cword(c+1) && line[k]==cword(c)){
            return true;
        }
    }
}



//printing

function printtogrid(j,k){

}