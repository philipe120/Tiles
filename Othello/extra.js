


function automove(){
    
    let random = Math.floor((Math.random() * coordinates.length));
    console.log(coordinates[0]);
    
    mouseclick(coordinates[0]);
    
    // setInterval(() => {
    //     let random = Math.floor((Math.random() * coordinates.length));
    //     mouseclick(coordinates[random]);
    // }, 3000);
}