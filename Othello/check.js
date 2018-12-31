legalmove=4;
coordinates = [[3,5],[5,3],[6,4],[4,6]];
points = [[,1],[[3,5],[5,3],[6,4],[4,6]]];

function scangrid(c){
    //return legal moves

    legalmove=0;
    coordinates = [];
    points = [];
    

    //run through all grey tiles and check if there are tiles to move
    // brute-force method

    for (g=1;g<=8;g++){
        for (h=1;h<=8;h++){
            let a = g;
            let b = h;
            tilepoints = 0;
            let moved = false;


            line = [];
            for (let y = b; y >= 1; y--) {
                line = scanline(a,y,line);
            }
            if (calculatearray(line, c)){
                legalmove++;
                if (!moved){
                    coordinates.push([a,b]);
                    moved = true;
                }
                for (let y = b; y >= 1; y--) {
                    let element = document.getElementById(`row${a},column${y}`).className;
                    if (element == cword(c)) {
                        break;
                    } else if (element == cword(c + 1)) {
                        tilepoints++;
                    }
                }
            }


            line = [];
            for (let y = b; y <= 8; y++) {
                line = scanline(a,y,line);
            }
            if (calculatearray(line, c)){
                legalmove++;
                if (!moved){
                    coordinates.push([a,b]);
                    moved = true;
                }
                for (let y = b; y <= 8; y++) {
                    let element = document.getElementById(`row${a},column${y}`).className;
                    if (element == cword(c)) {
                        break;
                    } else if (element == cword(c + 1)) {
                        tilepoints++;
                    }
                }
            }


            line = [];
            for (x=a;x>=1;x--){
                line = scanline(x,b,line);
            }
            if (calculatearray(line, c)){
                legalmove++;
                if (!moved){
                    coordinates.push([a,b]);
                    moved = true;
                }
                for (let x = a;x >= 1;x--){
                    let element = document.getElementById(`row${x},column${b}`).className;
                    if (element == cword(c)) {
                        break;
                    } else if (element == cword(c + 1)) {
                        tilepoints++;
                    }
                }
            }


            line = [];
            for (x=a;x<=8;x++){
                line = scanline(x,b,line);
            }
            if (calculatearray(line, c)){
                legalmove++;
                if (!moved){
                    coordinates.push([a,b]);
                    moved = true;
                }                for (let x = a;x <= 8;x++){
                    let element = document.getElementById(`row${x},column${b}`).className;
                    if (element == cword(c)) {
                        break;
                    } else if (element == cword(c + 1)) {
                        tilepoints++;
                    }
                }
            }


            line = [];
            for (let x = a;x >= 1;x--){
                for (let y = b; y >= 1; y--) {
                    if (a-b == x-y){
                        line = scanline(x,y,line);
                    }
                }
            }
            if (calculatearray(line, c)){
                legalmove++;
                if (!moved){
                    coordinates.push([a,b]);
                    moved = true;
                }
                breakloop:
                for (let x = a;x >= 1;x--){
                    for (let y = b; y >= 1; y--) {
                        if (a-b == x-y){
                            let element = document.getElementById(`row${x},column${y}`).className;
                            if (element == cword(c)) {
                                break breakloop;
                            } else if (element == cword(c + 1)) {
                                tilepoints++;
                            }
                        }
                    }
                }
            }


            line = [];
            for (let x = a;x >= 1;x--){
                for (let y = b; y <= 8; y++) {
                    if (a+b == x+y){
                        line = scanline(x,y,line);
                    }
                }
            }
            if (calculatearray(line, c)){
                legalmove++;
                if (!moved){
                    coordinates.push([a,b]);
                    moved = true;
                }
                breakloop:
                for (let x = a;x >= 1;x--){
                    for (let y = b; y <= 8; y++) {
                        if (a+b == x+y){
                            let element = document.getElementById(`row${x},column${y}`).className;
                            if (element == cword(c)) {
                                break breakloop;
                            } else if (element == cword(c + 1)) {
                                tilepoints++;
                            }
                        }
                    }
                }
            }


            
            line = [];
            for (let x = a;x <= 8;x++){
                for (let y = b; y >= 1; y--) {
                    if (a+b == x+y){
                        line = scanline(x,y,line);
                    }
                }
            }
            if (calculatearray(line, c)){
                legalmove++;
                if (!moved){
                    coordinates.push([a,b]);
                    moved = true;
                }
                breakloop:
                for (let x = a;x <= 8;x++){
                    for (let y = b; y >= 1; y--) {
                        if (a+b == x+y){
                            let element = document.getElementById(`row${x},column${y}`).className;
                            if (element == cword(c)) {
                                break breakloop;
                            } else if (element == cword(c + 1)) {
                                tilepoints++;
                            }
                        }
                    }
                }
            }


            line = [];
            for (let x = a;x <= 8;x++){
                for (let y = b; y <= 8; y++) {
                    if (a-b == x-y){
                        line = scanline(x,y,line);
                    }
                }
            }
            if (calculatearray(line, c)){
                legalmove++;
                if (!moved){
                    coordinates.push([a,b]);
                    moved = true;
                }
                breakloop:
                for (let x = a;x <= 8;x++){
                    for (let y = b; y <= 8; y++) {
                        if (a-b == x-y){
                            let element = document.getElementById(`row${x},column${y}`).className;
                            if (element == cword(c)) {
                                break breakloop;
                            } else if (element == cword(c + 1)) {
                                tilepoints++;
                            }
                        }
                    }
                }
            }

            if (tilepoints != 0){
                points.push([tilepoints,[a,b]]);
            }

        }
    }
    if (legalmove==0){
        if (pass == 1 || turn == 61){
            turn = "end";
        }else{
            pass++;
        }
    }else{
        pass = 0;
    }
    pointsort();
}

function pointsort(){
    // sort points

    let temppoints = [[]];

    for (let x = 0;x < points.length;x++){
        if (typeof temppoints[0][points[x][0]] === "undefined"){
            temppoints[0][points[x][0]] = points[x][0];
        }
    }

    for (let x = 1;x < temppoints[0].length;x++){
        if (typeof temppoints[0][x] !== "undefined"){
            temppoints[x] = [];
        }
    }

    for (let x = 1;x < temppoints.length;x++){
        if (typeof temppoints[x] !== "undefined"){
            for (let y = 0;y < points.length;y++){
                if (points[y][0] == x){
                    temppoints[x].push(points[y][1]);
                }
            }
        }
    }

    points = temppoints;
}

function countgrid(){
    let white = 0;
    let black = 0;
    
    for (a=1;a<=8;a++){
        for (b=1;b<=8;b++){
            let element = document.getElementById(`row${a},column${b}`);
            element.classList.remove("white_hover");
            element.classList.remove("black_hover");
            if (element.className == "black"){
                black++;
            }else if (element.className == "white"){
                white++;
            }
        }
    }

    if (white > black){
        return "White";
    }else if (white < black){
        return "Black";
    }else if (white == black){
        return "Tie";
    }
}