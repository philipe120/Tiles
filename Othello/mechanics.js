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
    
    if (num == true){
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

    if (num == true){
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

    if (num == true){
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

    if (num == true){
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

///////////////////////////fix////////////////////////////////////


function upleft(a, b, c) {
    let line = [];
    let check = a-b;
    for (let x = a;x >= 1;x--){
        for (let y = b; y >= 1; y--) {
            let check2=x-y;
            if (check == check2){
                let element = document.getElementById(`row${x},column${y}`);
                element.classList.remove("white_hover");
                element.classList.remove("black_hover");
                line.push(element.className);
            }
        }
    }

    console.log(line);

    let num = calculatearray(line, c);
    console.log(num);
    
    if (num == true){
        let check = a-b;
        breakloop:
        for (let x = a;x >= 1;x--){
            for (let y = b; y >= 1; y--) {
                let check2=x-y;
                if (check == check2){
                    let element = document.getElementById(`row${x},column${y}`).className;
                    if (element == cword(c)) {
                        //console.log("break");
                        break breakloop;
                    } else if (element == cword(c + 1)) {
                        //console.log("set");
                        document.getElementById(`row${x},column${y}`).className = cword(c);
                    } else if (element == "grey") {
                        //console.log("grey");
                    } else {
                        //console.log("error");
                    }
                }
            }
        }
        addturn = true;
    }
}

function upright(a, b, c) {
    let line = [];
    let check = a+b;
    for (let x = a;x >= 1;x--){
        for (let y = b; y <= 8; y++) {
            let check2=x+y;
            if (check == check2){
                let element = document.getElementById(`row${x},column${y}`);
                element.classList.remove("white_hover");
                element.classList.remove("black_hover");
                line.push(element.className);
            }
        }
    }

    console.log(line);

    let num = calculatearray(line, c);
    console.log(num);
    
    if (num == true){
        let check = a+b;
        breakloop:
        for (let x = a;x >= 1;x--){
            for (let y = b; y <= 8; y++) {
                let check2=x+y;
                if (check == check2){
                    let element = document.getElementById(`row${x},column${y}`).className;
                    if (element == cword(c)) {
                        //console.log("break");
                        break breakloop;
                    } else if (element == cword(c + 1)) {
                        //console.log("set");
                        document.getElementById(`row${x},column${y}`).className = cword(c);
                    } else if (element == "grey") {
                        //console.log("grey");
                    } else {
                        //console.log("error");
                    }
                }
            }
        }
        addturn = true;
    }
}

function downleft(a, b, c) {
    let line = [];
    let check = a+b;
    for (let x = a;x <= 8;x++){
        for (let y = b; y >= 1; y--) {
            let check2=x+y;
            if (check == check2){
                let element = document.getElementById(`row${x},column${y}`);
                element.classList.remove("white_hover");
                element.classList.remove("black_hover");
                line.push(element.className);
            }
        }
    }

    console.log(line);

    let num = calculatearray(line, c);
    console.log(num);
    
    if (num == true){
        let check = a+b;
        breakloop:
        for (let x = a;x <= 8;x++){
            for (let y = b; y >= 1; y--) {
                let check2=x+y;
                if (check == check2){
                    let element = document.getElementById(`row${x},column${y}`).className;
                    if (element == cword(c)) {
                        console.log("break");
                        break breakloop;
                    } else if (element == cword(c + 1)) {
                        console.log("set");
                        document.getElementById(`row${x},column${y}`).className = cword(c);
                    } else if (element == "grey") {
                        console.log("grey");
                    } else {
                        console.log("error");
                    }
                }
            }
        }
        addturn = true;
    }
}

function downright(a, b, c) {
    let line = [];
    let check = a-b;
    for (let x = a;x <= 8;x++){
        for (let y = b; y <= 8; y++) {
            let check2=x-y;
            if (check == check2){
                let element = document.getElementById(`row${x},column${y}`);
                element.classList.remove("white_hover");
                element.classList.remove("black_hover");
                line.push(element.className);
            }
        }
    }

    console.log(line);

    let num = calculatearray(line, c);
    console.log(num);
    
    if (num == true){
        let check = a-b;
        breakloop:
        for (let x = a;x <= 8;x++){
            for (let y = b; y <= 8; y++) {
                let check2=x-y;
                if (check == check2){
                    let element = document.getElementById(`row${x},column${y}`).className;
                    if (element == cword(c)) {
                        console.log("break");
                        break breakloop;
                    } else if (element == cword(c + 1)) {
                        console.log("set");
                        document.getElementById(`row${x},column${y}`).className = cword(c);
                    } else if (element == "grey") {
                        console.log("grey");
                    } else {
                        console.log("error");
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
        return "white";
    } else if (c % 2 == 0) {
        return "black";
    } else {
        return "panic";
    }
}


//check if the line is legal or not
function calculatearray(line, c) {
    if (line.length>=2){
        for (k=1;k<=line.length-1;k++){
            if (line[0] != 'grey'){
                //console.log("error1");
                return false;
            }else if (line[k-1]==cword(c+1) && line[k]==cword(c)){
                //console.log("exit");
                return true;
            }else if (line[k]=='grey' || line[k]==cword(c)){
                //console.log("error2");
                return false;
            }
        }
    }else{
        return false;
    }
}



//printing

function printtogrid(j,k){
    
}