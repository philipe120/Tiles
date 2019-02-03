function click_simgrid(a, b, c, simgrid){
    // returns new grid

    let line = [];
    for (let y = b; y >= 1; y--) {
        line.push(simgrid[a][y]);
    }

    if (calculatearray(line, c)){
        for (let y = b; y >= 1; y--) {
            if (simgrid[a][y] == cword(c)) {
                break;
            } else if (simgrid[a][y] == cword(c + 1)) {
                simgrid[a][y] = cword(c);
            }
        }
    }


    line = [];
    for (let y = b;y <= 8;y++) {
        line.push(simgrid[a][y]);
    }

    if (calculatearray(line, c)){
        for (let y = b;y <= 8;y++) {
            if (simgrid[a][y] == cword(c)) {
                break;
            } else if (simgrid[a][y] == cword(c + 1)) {
                simgrid[a][y] = cword(c);
            }
        }
    }


    line=[];
    for (let x = a;x >= 1;x--){
        line.push(simgrid[x][b]);
    }

    if (calculatearray(line, c)){
        for (let x = a;x >= 1; x--){
            if (simgrid[x][b] == cword(c)) {
                break;
            } else if (simgrid[x][b] == cword(c + 1)) {
                simgrid[x][b] = cword(c);
            }
        }
    }


    line=[];
    for (let x = a;x <= 8;x++){
        line.push(simgrid[x][b]);
    }

    if (calculatearray(line, c)){
        for (let x = a;x <= 8;x++){
            if (simgrid[x][b] == cword(c)) {
                break;
            } else if (simgrid[x][b] == cword(c + 1)) {
                simgrid[x][b] = cword(c);
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
        breakloop:
        for (let x = a;x >= 1;x--){
            for (let y = b; y >= 1; y--) {
                if (a-b == x-y){
                    if (simgrid[x][y] == cword(c)) {
                        break breakloop;
                    } else if (simgrid[x][y] == cword(c + 1)) {
                        simgrid[x][y] = cword(c);
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
        breakloop:
        for (let x = a;x >= 1;x--){
            for (let y = b; y <= 8; y++) {
                if (a+b == x+y){
                    if (simgrid[x][y] == cword(c)) {
                        break breakloop;
                    } else if (simgrid[x][y] == cword(c + 1)) {
                        simgrid[x][y] = cword(c);
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
        breakloop:
        for (let x = a;x <= 8;x++){
            for (let y = b; y >= 1; y--) {
                if (a+b == x+y){
                    if (simgrid[x][y] == cword(c)) {
                        break breakloop;
                    } else if (simgrid[x][y] == cword(c + 1)) {
                        simgrid[x][y] = cword(c);
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
        breakloop:
        for (let x = a;x <= 8;x++){
            for (let y = b; y <= 8; y++) {
                if (a-b == x-y){
                    if (simgrid[x][y] == cword(c)) {
                        break breakloop;
                    } else if (simgrid[x][y] == cword(c + 1)) {
                        simgrid[x][y] = cword(c);
                    }
                }
            }
        }
    }


    simgrid[a][b] = cword(c);
    return simgrid;
}