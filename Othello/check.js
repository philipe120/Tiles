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



            //diagonals



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