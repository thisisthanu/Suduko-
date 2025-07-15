let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;

const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turnO)
        {
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
})

const blockallboxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const enableall=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}
const checkWinner=()=>{
    for(let pattern of winpattern)
    {
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!=""&&pos2val!=""&&pos3val!="")
        {
            if(pos1val===pos2val&&pos2val===pos3val)
            {
                console.log("Winner"); 
                showWinner(pos1val);
            }
        }
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    blockallboxes();
}

const ResetGame=()=>{
    turn0=true;
    enableall();
    msgcontainer.classList.add("hide");
}


newGameBtn.addEventListener("click",ResetGame);
resetBtn.addEventListener("click",ResetGame);
