
for (i = 0; i < 256; i++) {
    let tile = document.createElement("div");
    tile.classList.add("tile");
    document.getElementById("tile-container").appendChild(tile);
    console.log("added child.");
}

