var myvar;

function automove(){
    myvar = setInterval(autofunction,0)
    document.getElementById("automove").onclick = function(){stopmove()};
    document.getElementById("automove").innerHTML = "Stop Move";
}

function autofunction(){
    let random = Math.floor((Math.random() * coordinates.length));
    mouseclick(coordinates[random][0],coordinates[random][1]);
}

function stopmove(){
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

}