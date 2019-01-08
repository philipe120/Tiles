f_move1 = [];
f_move2 = [];
f_move3 = [];
simgrid = [];
//simgrid = [["grey","grey",etc.],["grey","grey",etc.],etc.]

// store stuff for hard difficulty

function bestmove(){
/*
"think ahead" four steps, then choose most valuable move

tips and trick?
*/

// we want to get pieces to be stable?
create_simgrid()
}

function create_simgrid(){
    simgrid = [];
    for (let x = 1; x <= 8; x++){
        simgrid[x] = [];
        for (let y = 1; y <= 8; y++){
            let element = document.getElementById(`row${x},column${y}`);
            element.classList.remove("white_hover");
            element.classList.remove("black_hover");
            simgrid[x][y] = element.className;
        }
    }
    console.log(simgrid);
}

function analyse_simgrid(){

}


function analyse(){

}

function cornertrap(){



}