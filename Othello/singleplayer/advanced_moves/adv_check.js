function analyse_simgrid(simgrid,c){

    for (g=1;g<=8;g++){
        for (h=1;h<=8;h++){
            let a = g;
            let b = h;
            tilepoints = 0;
            let moved = false;


            line = [];
            for (let y = b; y >= 1; y--) {
                line.push(simgrid[a][y]);
            }
            
            if (calculatearray(line, c)){
                legalmove++;
                if (!moved){
                    coordinates.push([a,b]);
                    moved = true;
                }
                for (let y = b; y >= 1; y--) {
                    if (simgrid[a][y] == cword(c)) {
                        break;
                    } else if (simgrid[a][y] == cword(c + 1)) {
                        tilepoints++;
                    }
                }
            }

/*
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
            }*/
            if (legalmove==0){
                if (pass == 1 || turn == 61){
                    turn = "end";
                }else{
                    pass++;
                }
            }else{
                pass = 0;
            }
        }
    }






    // return tempcoordinates;
}