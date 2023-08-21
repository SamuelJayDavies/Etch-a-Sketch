const gridContainer = document.querySelector(".gridContainer");
const colourSelector = document.querySelector("#colourSelector");

let colour = "#FFFFFF"

function createDrawSpace() {
    for(let i=0; i<64; i++) {
        const grid = document.createElement("div");
        grid.addEventListener("mouseover", function (e) {
            changeColour(e);
        });
        grid.addEventListener("mousedown", function (e) {
            changeColour(e);
        });
        grid.ondragstart = () => {
            return false;
        };
        gridContainer.appendChild(grid);
    }
}

function changeColour(e) {
    if(e.buttons == 1) {
        e.target.style.background = colour;
    } else if(e.buttons == 4) {
        e.target.style.background = "white";
    }
}

gridContainer.addEventListener("mouseenter", function () {
    colour = colourSelector.value;
});

createDrawSpace();