// a=row
// b=column
// c=turn number
// cword = color associated with the word
// odd=white,even=black
//
//f,g are temporary variables to be used in the function
//x,y are temporary variables to be used in the for statements
//
//



function left(a,b,c){
    line=[];
    cwords=cword(c);

    for (y=b;y>=1;y--){
        element = document.getElementById(`row${a},column${y}`);
        element.classList.remove("white_hover");
        element.classList.remove("black_hover");
        temp = element.className;
        line.push(temp);
    }

    num = legalmove(line,cwords);

    if (num !=false){
        for (y=b;y>=1;y--){
            element = document.getElementById(`row${a},column${y}`).className;
            if (element == cword(c)){
                console.log("break");
                break;
            }else if (element == cword(c+1)){
                console.log("set");
                document.getElementById(`row${a},column${y}`).className = cword(c);
            }else if (element == "grey"){
                console.log("grey");
            }else {
                console.log("error");
            }/*
            if (temp<=num){
				if (temp == 0){
					temp++;
					continue;
				}else{
					temp++;
					document.getElementById(`row${a},column${y}`).className = c;
				}
			}else{
				break;
            }
            */
        }
        addturn = true;
    }
    //document.getElementById("temp1").innerHTML = num;
    document.getElementById("temp2").innerHTML = line;
}



function right(a,b,c){
    line=[];
    cwords=cword(c);

    for (y=b;y<=8;y++){
        element = document.getElementById(`row${a},column${y}`);
        element.classList.remove("white_hover");
        element.classList.remove("black_hover");
        temp = element.className;
        line.push(temp);
    }

    num = legalmove(line,c);

    if (num !=false){
		temp = 0;
        for (y=b;y<=8;y++){
            if (temp<=num){
				if (temp == 0){
					temp++;
					continue;
				}else{
					temp++;
					document.getElementById(`row${a},column${y}`).className = c;
				}
			}else{
				break;
			}
        }
        addturn = true;
    }
    document.getElementById("temp1").innerHTML = num;
    document.getElementById("temp2").innerHTML = line;
}

///////////////////////////fix////////////////////////////////////
/* ///////////////////can't print properly///////////////


function up(a,b,c){
    line=[];
    c=cword(c);

    for (x=a;x>=1;x--){
        element = document.getElementById(`row${x},column${b}`);
        element.classList.remove("white_hover");
        element.classList.remove("black_hover");
        temp = element.className;
        line.push(temp);
    }

    num = legalmove(line,c);

    if (num !=false){
        for (x=a;x>=1;x--){
            if (temp<=num){
				if (temp == 0){
					temp++;
					continue;
				}else{
					temp++;
					document.getElementById(`row${x},column${b}`).className = c;
				}
			}else{
				break;
			}
        }
        addturn = true;
    }
    document.getElementById("temp1").innerHTML = num;
    document.getElementById("temp2").innerHTML = line;
}



function down(a,b,c){
    line=[];
    c=cword(c);

    for (x=a;x<=8;x++){
        element = document.getElementById(`row${x},column${b}`);
        element.classList.remove("white_hover");
        element.classList.remove("black_hover");
        temp = element.className;
        line.push(temp);
    }

    num = legalmove(line,c);

    if (num !=false){
        for (x=a;x<=8;x++){
            if (temp<=num){
				if (temp == 0){
					temp++;
					continue;
				}else{
					temp++;
					document.getElementById(`row${x},column${b}`).className = c;
				}
			}else{
				break;
			}
        }
        addturn = true;
    }
    document.getElementById("temp1").innerHTML = num;
    document.getElementById("temp2").innerHTML = line;
}
*/











function writeself(a,b,c){
    c=cword(c);
    document.getElementById(`row${a},column${b}`).className = c;
}














function cword(c){
    if (c%2==1){
        return "white";
    }else if(c%2==0){
        return "black";
    }else {
        return "panic";
    }
}


//array stuff

function legalmove(line,c){

    if (!checkarray(line)){
    }else {
        return calculatearray(line,c);
    }
}

function checkarray(line){

    if (line[0]!='grey'){
        return false;
    }
    else {
        return true;
    }
}

function calculatearray(line,c){
//printdebug("aaaaaaa");
    for(k=1;k<=line.length-1;k++){
        if (line[k]=='grey'){
            return false;
        }else{
            if (c=="black"){
                if (line[k]=='white' && line[k+1]=='black'){
                    return k;
                }
            }else if (c=="white"){
                if (line[k]=='black' && line[k+1]=='white'){
                    return k;
                }
            }
        }
    }
}
