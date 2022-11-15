


let gridSet = (num) => {
    if (num > 100) {console.log("Error! Cannot process that big of a grid."); return;}
    for (i = 0; i < num*num; i++) {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        document.getElementById("tile-container").appendChild(tile);
        console.log("added child.");
    }
}

gridSet(16);