let button = document.querySelector('button');
let body = document.querySelector('body');
let hexvalues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

button.addEventListener('click', changeHex);

function changeHex() {
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hexvalues.length)
        hex += hexvalues[index];
    }

    button.style.backgroundColor = hex;
    body.style.backgroundColor = hex;
}