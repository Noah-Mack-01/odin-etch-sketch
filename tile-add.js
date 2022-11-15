


let gridSet = (num) => {
    if (num > 100) {console.log("Error! Cannot process that big of a grid."); return;}

    let style =document.createAttribute
    document.getElementById("tile-container").innerHTML="";

    for (i = 0; i < num*num; i++) {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        tile.style.width = `${80/num}vh`;
        tile.style.height= `${80/num}vh`;
        document.getElementById("tile-container").appendChild(tile);
        console.log("added child.");
    }
}


document.getElementById("onButton").addEventListener("click", () => {
    let res = prompt("What should be resolution of grid?");
    gridSet(+res);
});

gridSet(20);


