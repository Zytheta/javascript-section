// Global variables

const tileset = document.getElementById("tileset");
const reset = document.getElementById("reset");

const container = document.getElementById("container");

const height = 720;
const width = 1280;

// Functions

function createBoard() {
    let columns = prompt("How many columns?", 16);
    if (columns > 100) {
        alert("Please enter 100 or fewer.");
        return
    }
    let numberOfColumns = parseFloat(columns);
    let rows = prompt("How many rows?", 16);
    if (rows > 100) {
        alert("Please enter 100 or fewer.");
        return
    }
    let numberOfRows = parseFloat(rows);
    const verticalContainerWidth = 1280 / numberOfColumns
    const rowHeight = 720 / numberOfRows;
    console.log(`Number of rows is ${numberOfRows}.`)
    console.log(`Row height is ${rowHeight}.`)
    console.log(`Number of columns is ${numberOfColumns}.`)
    console.log(`Column width is ${verticalContainerWidth}.`)
    for (let i = 0; i < numberOfColumns; i++) {
        const verticalContainer = document.createElement('div');

        verticalContainer.setAttribute("class", "vertical-container");
        verticalContainer.style.width = verticalContainerWidth + "px";

        for (let i = 0; i < numberOfColumns; i++) {
            container.appendChild(verticalContainer);
            for (let i = 0; i < 1; i++) {
                const pane = document.createElement('div');

                pane.setAttribute("class", "pane");
                pane.style.height = rowHeight + "px";

                for (let i = 0; i < 1; i++) {
                    verticalContainer.appendChild(pane);
                }
            }
        }
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color
}

function changeColor(className) {
    const elements = document.getElementsByClassName(className);

    for (let i = 0; i < elements.length; i++) {
        let darkness1 = 0;

        elements[i].addEventListener("mouseover", function() {
            if (darkness1 < 10) {
                const newColorValue = 255 - (25 * darkness1);
                elements[i].style.backgroundColor = `rgb(${newColorValue}, ${newColorValue}, ${newColorValue})`;
            }
        });

        elements[i].addEventListener("mouseout", function() {
            if (darkness1 < 10) {
                darkness1++;
                const newColorValue = 255 - (25 * darkness1);
                elements[i].style.backgroundColor = `rgb(${newColorValue}, ${newColorValue}, ${newColorValue})`;
            }
        })
    }
}

function deleteBoard() {
    const verticalContainer = container.querySelectorAll('.vertical-container');
    verticalContainer.forEach(div => {
        div.remove();
    });
}

// Dom events

tileset.addEventListener('click', function(e) {
    console.log("Button was clicked.");
    createBoard();
    changeColor("pane");
});

reset.addEventListener('click', function(e) {
    console.log("Reset was clicked.");
    deleteBoard();
})
