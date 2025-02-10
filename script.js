
const boxes = document.querySelectorAll(".child"); // 64 --> array
const eraserBtn = document.getElementById("eraser-button");
const input = document.getElementById("my-input");

const boardMain =document.getElementById("board-main");
const downloadBtn = document.getElementById("download-btn");


let color = "black";

downloadBtn.onclick =download ;


// input.onchange = () => {
//   color = input.value;
// };

eraserBtn.onclick = () => {
color = "white";
};

// onmousedown
let isMouseClicked = false;

document.onmousedown = () => {
isMouseClicked = true;
};

// onmouseup
document.onmouseup = () => {
isMouseClicked = false;
};

for (let i = 0; i <= 64; i++) {
boxes[i].onmouseenter = () => {
    if (isMouseClicked === true) {
    boxes[i].style.backgroundColor = color;
    }
};
}

function setColor() {
// const userChoice = prompt("Enter color");
const userChoice = input.value ;
color = userChoice;
}

function download(){

    let downloadfile = boardMain.innerHTML ;
}
