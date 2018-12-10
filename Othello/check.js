legalmove=4;

function scangrid(c){
    //return legal moves
    legalmove=0;

    //run through all grey tiles and check if there are tiles to move
    // brute-force method
    alls:
    for (j=1;j<=8;j++){
        for (k=1;k<=8;k++){

            let line = [];
            for (let y = k; y >= 1; y--) {
                line = scanline(j,y,line);
            }
            if (calculatearray(line, c)){
                legalmove++;
                break alls;
            }
        }
    }
    document.getElementById("legal").innerHTML = legalmove;
}