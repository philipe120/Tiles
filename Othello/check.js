legalmove=4;

function scangrid(){
    //return legal moves


    //run through all grey tiles and check if there are tiles to move
    let line = [];
    for (let y = b; y >= 1; y--) {
        line = scanline(a,y,line);
    }
    let line = [];
    for (let y = b; y <= 8; y++) {
        line = scanline(a,y,line);
    }

}