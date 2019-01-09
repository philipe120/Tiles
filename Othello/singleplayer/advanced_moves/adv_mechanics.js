function click_simgrid(a, b, c){
    
    let line = [];
    for (let y = b; y >= 1; y--) {
        line = scanline(a,y,line);
    }

    if (calculatearray(line, c)){
        for (let y = b; y >= 1; y--) {
            let element = document.getElementById(`row${a},column${y}`).className;
            if (element == cword(c)) {
                break;
            } else if (element == cword(c + 1)) {
                document.getElementById(`row${a},column${y}`).className = cword(c);
            }
        }
    }


    line = [];
    for (let y = b;y <= 8;y++) {
        line = scanline(a,y,line);
    }

    if (calculatearray(line, c)){
        for (let y = b;y <= 8;y++) {
            let element = document.getElementById(`row${a},column${y}`).className;
            if (element == cword(c)) {
                break;
            } else if (element == cword(c + 1)) {
                document.getElementById(`row${a},column${y}`).className = cword(c);
            }
        }
    }


    line=[];
    for (let x = a;x >= 1;x--){
        line = scanline(x,b,line);
    }

    if (calculatearray(line, c)){
        for (let x = a;x >= 1; x--){
            let element = document.getElementById(`row${x},column${b}`).className;
            if (element == cword(c)) {
                break;
            } else if (element == cword(c + 1)) {
                document.getElementById(`row${x},column${b}`).className = cword(c);
            }
        }
    }


    line=[];
    for (let x = a;x <= 8;x++){
        line = scanline(x,b,line);
    }

    if (calculatearray(line, c)){
        for (let x = a;x <= 8;x++){
            let element = document.getElementById(`row${x},column${b}`).className;
            if (element == cword(c)) {
                break;
            } else if (element == cword(c + 1)) {
                document.getElementById(`row${x},column${b}`).className = cword(c);
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
        breakloop:
        for (let x = a;x >= 1;x--){
            for (let y = b; y >= 1; y--) {
                if (a-b == x-y){
                    let element = document.getElementById(`row${x},column${y}`).className;
                    if (element == cword(c)) {
                        break breakloop;
                    } else if (element == cword(c + 1)) {
                        document.getElementById(`row${x},column${y}`).className = cword(c);
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
        breakloop:
        for (let x = a;x >= 1;x--){
            for (let y = b; y <= 8; y++) {
                if (a+b == x+y){
                    let element = document.getElementById(`row${x},column${y}`).className;
                    if (element == cword(c)) {
                        break breakloop;
                    } else if (element == cword(c + 1)) {
                        document.getElementById(`row${x},column${y}`).className = cword(c);
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
        breakloop:
        for (let x = a;x <= 8;x++){
            for (let y = b; y >= 1; y--) {
                if (a+b == x+y){
                    let element = document.getElementById(`row${x},column${y}`).className;
                    if (element == cword(c)) {
                        break breakloop;
                    } else if (element == cword(c + 1)) {
                        document.getElementById(`row${x},column${y}`).className = cword(c);
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
        breakloop:
        for (let x = a;x <= 8;x++){
            for (let y = b; y <= 8; y++) {
                if (a-b == x-y){
                    let element = document.getElementById(`row${x},column${y}`).className;
                    if (element == cword(c)) {
                        break breakloop;
                    } else if (element == cword(c + 1)) {
                        document.getElementById(`row${x},column${y}`).className = cword(c);
                    }
                }
            }
        }
    }
}