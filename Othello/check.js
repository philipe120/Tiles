legalmove=4;

function scangrid(c){
    //return legal moves
    legalmove=0;

    //run through all grey tiles and check if there are tiles to move
    // brute-force method

    for (g=1;g<=8;g++){
        for (h=1;h<=8;h++){
            let a=g;
            let b=h;
            
            let line = [];
            for (let y = b; y >= 1; y--) {
                line = scanline(a,y,line);
            }
            if (calculatearray(line, c)){
                legalmove++;
                continue;
            }

            line = [];
            for (let y = b; y <= 8; y++) {
                line = scanline(a,y,line);
            }
            if (calculatearray(line, c)){
                legalmove++;
                continue;
            }

            line = [];
            for (x=a;x>=1;x--){
                line = scanline(x,b,line);
            }
            if (calculatearray(line, c)){
                legalmove++;
                continue;
            }

            line = [];
            for (x=a;x<=8;x++){
                line = scanline(x,b,line);
            }
            if (calculatearray(line, c)){
                legalmove++;
                continue;
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
                continue;
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
                continue;
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
                continue;
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
                continue;
            }
        }
    }
    if (legalmove==0){
        turn = "end";
    }
    document.getElementById("legal").innerHTML = legalmove;
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
                black ++;
            }else if (element.className == "white"){
                white ++;
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