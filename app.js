let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let win = document.querySelector("#p1");
let msg = document.querySelector(".msg");
let newG = document.querySelector("#newG");
let turn0 = true;
let count = 0;
const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const disable = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enable = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn0 == true) {
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const checkwinner = () => {
    for(let pat of winpattern) {
        const p1 = boxes[pat[0]].innerText;
        const p2 = boxes[pat[1]].innerText;
        const p3 = boxes[pat[2]].innerText;
        if(p1!="" && p2!="" && p3!="") {
            if(p1===p2 && p2===p3) {
                win.innerText = "Winner of the game is "+p1;
            }
            msg.classList.remove("hide");
                msg.classList.add("msg1");
                disable();
        }
    }
};

const newgame = () => {
    turn0 = true;
    enable();
    msg.classList.add("hide");
    msg.classList.remove("msg1");
};

newG.addEventListener("click", newgame);
reset.addEventListener("click", newgame);