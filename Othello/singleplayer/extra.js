var myvar;

function automove(){
    single = false;

    myvar = setInterval(function (){
        let randomA = Math.floor((Math.random() * 8)+1);
        let randomB = Math.floor((Math.random() * 8)+1);
        AImoved = true;
        mouseclick(randomA,randomB);
    },Math.floor((Math.random() * 100)+10));
    document.getElementById("automove").onclick = function(){stopmove()};
    document.getElementById("automove").innerHTML = "Stop Move";
}

function stopmove(){
    single = true;
    clearInterval(myvar);
    document.getElementById("automove").onclick = function(){automove()};
    document.getElementById("automove").innerHTML = "Auto Move";
}

function reset(){
    stopmove();
    turn=1;
    started = false;
    start();
    legalmove=4;
    coordinates = [[3,5],[5,3],[6,4],[4,6]];
    points = [[,1],[[3,5],[5,3],[6,4],[4,6]]];
    document.getElementById("legal").innerHTML = "";
    single = true;
}

function AIsetup(){
    //for multiplayer stuff
    single = true;
}

function friend(){
    /* how it works

easy = random moves
medium = random but prioritize corner, then edges, then highest points
hard = algothim that analyse moves in advance

    */
    if (mode == "easy"){
        let randomtime = Math.floor((Math.random() * 2000)+100);

        setTimeout(() => {
            let random = Math.floor((Math.random() * coordinates.length));
            group(coordinates[random][0],coordinates[random][1]);
        }, randomtime);
    }else if (mode == "medium"){
        sidecoordinates = [];
        cornercoordinates = [];

        for(let x = 0;x < coordinates.length;x++){
            if ((coordinates[x][0] == 1 || coordinates[x][1] == 1) || 
                (coordinates[x][0] == 8 || coordinates[x][1] == 8)){
                sidecoordinates.push(coordinates[x]);
            }
        }

        for(let x = 0;x < sidecoordinates.length;x++){
            if (sidecoordinates[x][0] == 1){
                if (sidecoordinates[x][1] == 1 || sidecoordinates[x][1] == 8){
                    cornercoordinates.push(sidecoordinates[x]);
                }
            }else if (sidecoordinates[x][0] == 8){
                if (sidecoordinates[x][1] == 1 || sidecoordinates[x][1] == 8){
                    cornercoordinates.push(sidecoordinates[x]);
                }
            }
        }

        if (cornercoordinates.length != 0){
            let randomtime = Math.floor((Math.random() * 2000)+1000);

            setTimeout(() => {
                let random = Math.floor((Math.random() * cornercoordinates.length));
                group(cornercoordinates[random][0],cornercoordinates[random][1]);
            }, randomtime);
        }else if (sidecoordinates.length != 0){
            let randomtime = Math.floor((Math.random() * 2000)+1000);

            setTimeout(() => {
                let random = Math.floor((Math.random() * sidecoordinates.length));
                group(sidecoordinates[random][0],sidecoordinates[random][1]);
            }, randomtime);
        }else{
            let randomtime = Math.floor((Math.random() * 2000)+1000);

            setTimeout(() => {
                if (Math.floor((Math.random()))){
                    let random = Math.floor((Math.random() * points[points.length-1].length));
                    group(points[points.length-1][random][0],points[points.length-1][random][1]);
                }else{
                    let random = Math.floor((Math.random() * coordinates.length));
                    group(coordinates[random][0],coordinates[random][1]);
                }
            }, randomtime);
        }
    }else if (mode == "hard"){
        let randomtime = Math.floor((Math.random() * 2000)+1000);
        let temp = bestmove();
        setTimeout(() => {
            AImoved = true;
            mouseclick(parseInt(temp[0]),parseInt(temp[1]));
        }, randomtime);
    }
}

function group(a,b){
    AImoved = true;
    mouseclick(a,b);
}