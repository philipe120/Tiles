window.clicked=false;
window.started=false;
window.turn = 1;

function start(){

    if (!started){
        grid = "<table><tr>";


        for(x=1;x<=8;x++){
            for(y=1;y<=8;y++){
                grid = grid + `<td class='grey' onmouseover='mouseon(${x},${y})' onmouseout='mouseoff(${x},${y})' 
                onclick = 'mouseclick(${x},${y})' id = 'row${x},column${y}'></td>`;
            }
            if (x!=8){
                grid = grid+`</tr id = 'row${x}'><tr>`;
            }
        }

        grid = grid + "</tr></table>";
        
        document.getElementById("demo").innerHTML = grid;
        started=true;

        document.getElementById(`row4,column4`).className = "white";
        document.getElementById(`row5,column5`).className = "white";
        document.getElementById(`row4,column5`).className = "black";
        document.getElementById(`row5,column4`).className = "black";
    }
}


function mouseon(a,b){
    if (clicked){

    }else{
    element = document.getElementById(`row${a},column${b}`);
    element.classList.add("white_hover");
    console.log(a+'\n'+b);
    }
}

function mouseoff(a,b){
    if (clicked){

    }else{
    element = document.getElementById(`row${a},column${b}`);
    element.classList.remove("white_hover");
    console.log(a+'\n'+b);
    }
}

function mouseclick(a,b){
    // if (check(a,b)){

    // }
    
    left(a,b,turn);
    right(a,b,turn);

    // clicked = true;
    console.log(a+'\n'+b);
}