console.log("working...");

let boxes = document.querySelectorAll(".box");
let msg = document.getElementById("msg");
let newGameBtn = document.getElementById("newGame-btn");
let resetBtn = document.getElementById("reset-btn");
let turnO = true;
let winnings = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]];
let count = 0;
const drawGame = (count) => {
    if (count > 9) {

    }
}
resetBtn.addEventListener("click", () => {
    count = 0;
    for (let box of boxes) {
        box.innerHTML = "";
        box.disabled = false;
        msg.innerText = "";
        msg.style.display = "none";
    }
});

newGameBtn.addEventListener("click", () => {
    count = 0;
    for (let box of boxes) {
        box.innerHTML = "";
        box.disabled = false;
        msg.innerText = "";
        msg.style.display = "none";
    }
});

for (let box of boxes) {
    box.addEventListener("click", () => {
        count++;
        if (count < 9) {
            if (turnO) {
                box.innerHTML = "O";
                turnO = false;
            }
            else {
                box.innerHTML = "X";
                turnO = true;
            }
            box.disabled = true;
            checkWinner();
        }
        else {
            disableBoxes();
            msg.innerText = "The game is draw, reset to try again!";
            msg.style.display = "block";
        }
    });
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msg.style.display = "block";
    disableBoxes();
}
const checkWinner = () => {
    for (let position of winnings) {
        let position1 = boxes[position[0]].innerText;
        let position2 = boxes[position[1]].innerText;
        let position3 = boxes[position[2]].innerText;

        if (position1 != "" && position2 != "" && position3 != "") {
            if (position1 === position2 && position2 === position3) {
                console.log("winner", position1)
                showWinner(position1);
            }
        }
    };
}