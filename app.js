const gridContainer = document.querySelector(".gridContainer");

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
        e.target.style.background = "black";
    }
}

createDrawSpace();