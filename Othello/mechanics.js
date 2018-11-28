// a,x,j are row variables
// b,y,k are column variables
// turn (odd=white, even=black)

function left(a, b, c) {
    let line = [];
    let cwords = cword(c); // returns colour associated with word

    for (let y = b; y >= 1; y--) {
        let element = document.getElementById(`row${a},column${y}`);
        element.classList.remove("white_hover");
        element.classList.remove("black_hover");
        line.push(element.className);
    }

    console.log(line)

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
    cwords = cword(c);

    for (let y = b; y <= 8; y++) {
        let element = document.getElementById(`row${a},column${y}`);
        element.classList.remove("white_hover");
        element.classList.remove("black_hover");
        let temp = element.className;
        line.push(temp);
    }

    console.log(line)

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
/* ///////////////////can't print properly///////////////


function up(a,b,c){
    line=[];
    c=cword(c);

    for (x=a;x>=1;x--){
        element = document.getElementById(`row${x},column${b}`);
        element.classList.remove("white_hover");
        element.classList.remove("black_hover");
        temp = element.className;
        line.push(temp);
    }

    num = calculatearray(line,c);

    if (num !=false){
        for (x=a;x>=1;x--){
            if (temp<=num){
				if (temp == 0){
					temp++;
					continue;
				}else{
					temp++;
					document.getElementById(`row${x},column${b}`).className = c;
				}
			}else{
				break;
			}
        }
        addturn = true;
    }
    document.getElementById("temp1").innerHTML = num;
    document.getElementById("temp2").innerHTML = line;
}



function down(a,b,c){
    line=[];
    c=cword(c);

    for (x=a;x<=8;x++){
        element = document.getElementById(`row${x},column${b}`);
        element.classList.remove("white_hover");
        element.classList.remove("black_hover");
        temp = element.className;
        line.push(temp);
    }

    num = calculatearray(line,c);

    if (num !=false){
        for (x=a;x<=8;x++){
            if (temp<=num){
				if (temp == 0){
					temp++;
					continue;
				}else{
					temp++;
					document.getElementById(`row${x},column${b}`).className = c;
				}
			}else{
				break;
			}
        }
        addturn = true;
    }
    document.getElementById("temp1").innerHTML = num;
    document.getElementById("temp2").innerHTML = line;
}
*/

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