//Variables were defined using const and let
//Create the makeGrid function

function makeGrid(height, width) {
    const table = document.getElementById("pixelCanvas");
    let grid = '';
    // For Loops needed for both Cells and Rows
    for (let row = 0; row < height; row++) {
        grid += '<tr class="row-' + row + '">';
        for (let cell = 0; cell < width; cell++) {
            grid += '<td class="cell" id="row-' + row + '_cell-' + cell + '"></td>';
        }
        grid += '</tr>';
    }
    
    table.innerHTML = grid;

    //Call clickEventToCells function
    clickEventToCells();
}

// Provides values for width and height and uses them for the makeGrid() function
function formSubmit() {
    event.preventDefault();
    const width = document.getElementById('inputWidth').value;
    const height = document.getElementById('inputHeight').value;
    makeGrid(height, width);
}

// This will add click events to all the cells
function clickEventToCells() {
    const cells = document.getElementsByClassName('cell');
    const colorPicker = document.getElementById("colorPicker");
    for (let row = 0; row < cells.length; row++) {
        cells[row].addEventListener("click", function (event) {
            let clickedCell = event.target;
            clickedCell.style.backgroundColor = colorPicker.value;
        });
    }
}

// #sizePicker form submission
document.getElementById('sizePicker').onsubmit = function () {
    formSubmit();
};


