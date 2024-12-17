let boxes = document.querySelectorAll(".box")
let hide=document.querySelector(".congo")
let show_win=document.querySelector("next-message")
let new_game=document.querySelector(".game-button")
let reset_button=document.querySelector(".reset")
let draw=document.querySelector(".draw-container")
let c=0;
let winpos = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]]
let turnO = true
boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (turnO === true) {
            box.style.color="red"
            box.innerHTML = "X"
            turnO = false

        }
        else {
            box.style.color="blue"
            box.innerHTML = "O"
            turnO = true
        }
        c++;
        box.disabled = true;
        let isWinner=checkwinner();
        if(c===9 && !isWinner){
            draw.style.display="flex"
        }
    })
})

const reset=()=>{
    boxes.forEach(box => {
        turnO=true
        box.disabled=false
        box.innerHTML=""
        hide.style.display="none"
        draw.style.display="none"
        // box.style.color="none"
    });
}

new_game.addEventListener("click", reset)
reset_button.addEventListener("click", reset)


const checkwinner=()=>{
    for (const pattern of winpos) {
        // console.log([pattern[0]], [pattern[1]], [pattern[2]]);
        let pos0=boxes[[pattern[0]]].innerText 
        let pos1=boxes[[pattern[1]]].innerText
        let pos2=boxes[[pattern[2]]].innerText
        console.log(pos0, pos1, pos2);
        if(pos0!="" && pos1!="" && pos2!=""){
            if(pos0===pos1 && pos1===pos2){
                console.log("Winner");
                console.log(hide.style.display="flex")
                console.log(document.querySelector(".next-message").innerHTML=`${pos1} IS THE WINNER`);
                for (const box of boxes) {
                    box.disabled=true
                }
            }
        }
        // boxes.forEach(box => {
        //     if(box.innerHTML!=""){
        //         c++;
        //         if(c===9){
        //             draw.style.display="flex"
        //         }
                
        //     }
        // });

    }
    
}