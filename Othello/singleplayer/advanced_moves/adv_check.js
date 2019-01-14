function analyse_simgrid(simgrid, c){
    // returns coordinates

    let simcoordinates = [];
    for (g=1;g<=8;g++){
        for (h=1;h<=8;h++){
            let a = g;
            let b = h;
            let sim_tilevalue = 0;
            let moved = false;


            let line = [];
            for (let y = b; y >= 1; y--) {
                line.push(simgrid[a][y]);
            }

            if (calculatearray(line, c)){
                legalmove++;
                if (!moved){
                    simcoordinates.push([a,b]);
                    moved = true;
                }
                for (let y = b; y >= 1; y--) {
                    if (simgrid[a][y] == cword(c)) {
                        break;
                    } else if (simgrid[a][y] == cword(c + 1)) {
                        sim_tilevalue++;
                    }
                }
            }

            line = [];
            for (let y = b; y <= 8; y++) {
                line.push(simgrid[a][y]);
            }
            if (calculatearray(line, c)){
                legalmove++;
                if (!moved){
                    simcoordinates.push([a,b]);
                    moved = true;
                }
                for (let y = b; y <= 8; y++) {
                    if (simgrid[a][y] == cword(c)) {
                        break;
                    } else if (simgrid[a][y] == cword(c)) {
                        sim_tilevalue++;
                    }
                }
            }


            line = [];
            for (x=a;x>=1;x--){
                line.push(simgrid[x][b]);
            }
            if (calculatearray(line, c)){
                legalmove++;
                if (!moved){
                    simcoordinates.push([a,b]);
                    moved = true;
                }
                for (let x = a;x >= 1;x--){
                    if (simgrid[x][b] == cword(c)) {
                        break;
                    } else if (simgrid[x][b] == cword(c)) {
                        sim_tilevalue++;
                    }
                }
            }


            line = [];
            for (x=a;x<=8;x++){
                line.push(simgrid[x][b]);
            }
            if (calculatearray(line, c)){
                legalmove++;
                if (!moved){
                    simcoordinates.push([a,b]);
                    moved = true;
                } 
                for (let x = a;x <= 8;x++){
                    if (simgrid[x][b] == cword(c)) {
                        break;
                    } else if (simgrid[x][b] == cword(c)) {
                        sim_tilevalue++;
                    }
                }
            }


            line = [];
            for (let x = a;x >= 1;x--){
                for (let y = b; y >= 1; y--) {
                    if (a-b == x-y){
                        line.push(simgrid[x][y]);
                    }
                }
            }
            if (calculatearray(line, c)){
                legalmove++;
                if (!moved){
                    simcoordinates.push([a,b]);
                    moved = true;
                }
                breakloop:
                for (let x = a;x >= 1;x--){
                    for (let y = b; y >= 1; y--) {
                        if (a-b == x-y){
                            if (simgrid[x][y] == cword(c)) {
                                break;
                            } else if (simgrid[x][y] == cword(c)) {
                                sim_tilevalue++;
                            }
                        }
                    }
                }
            }


            line = [];
            for (let x = a;x >= 1;x--){
                for (let y = b; y <= 8; y++) {
                    if (a+b == x+y){
                        line.push(simgrid[x][y]);
                    }
                }
            }
            if (calculatearray(line, c)){
                legalmove++;
                if (!moved){
                    simcoordinates.push([a,b]);
                    moved = true;
                }
                breakloop:
                for (let x = a;x >= 1;x--){
                    for (let y = b; y <= 8; y++) {
                        if (a+b == x+y){
                            if (simgrid[x][y] == cword(c)) {
                                break;
                            } else if (simgrid[x][y] == cword(c)) {
                                sim_tilevalue++;
                            }
                        }
                    }
                }
            }


            
            line = [];
            for (let x = a;x <= 8;x++){
                for (let y = b; y >= 1; y--) {
                    if (a+b == x+y){
                        line.push(simgrid[x][y]);
                    }
                }
            }
            if (calculatearray(line, c)){
                legalmove++;
                if (!moved){
                    simcoordinates.push([a,b]);
                    moved = true;
                }
                breakloop:
                for (let x = a;x <= 8;x++){
                    for (let y = b; y >= 1; y--) {
                        if (a+b == x+y){
                            if (simgrid[x][y] == cword(c)) {
                                break;
                            } else if (simgrid[x][y] == cword(c)) {
                                sim_tilevalue++;
                            }
                        }
                    }
                }
            }


            line = [];
            for (let x = a;x <= 8;x++){
                for (let y = b; y <= 8; y++) {
                    if (a-b == x-y){
                        line.push(simgrid[x][y]);
                    }
                }
            }
            if (calculatearray(line, c)){
                legalmove++;
                if (!moved){
                    simcoordinates.push([a,b]);
                    moved = true;
                }
                breakloop:
                for (let x = a;x <= 8;x++){
                    for (let y = b; y <= 8; y++) {
                        if (a-b == x-y){
                            if (simgrid[x][y] == cword(c)) {
                                break;
                            } else if (simgrid[x][y] == cword(c)) {
                                sim_tilevalue++;
                            }
                        }
                    }
                }
            }
            // check if end or skip. If yes, check the points
            // bonuspoints(sim_tilevalue);
            // set sim_tilevalue to coordinates
        }
    }






    return simcoordinates;
}

function bonuspoints(sim_tilevalue){

    // check other point factors
    // includes()

}