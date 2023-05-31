const
    selectBox = document.querySelector(".select-box"),
    selectXBtn = selectBox.querySelector(".playerX"),
    selectOBtn = selectBox.querySelector(".playerO"),
    selectnew = document.querySelector(".select-new"),
    box = document.querySelectorAll(".box"),
    resetBtn = document.querySelector("#resetBtn"),
    xscore = document.querySelector("#xscore"),
    oscore = document.querySelector("#oscore")

window.onload = () => {
    selectXBtn.onclick = () => {
        selectBox.classList.add("hide");
        selectnew.classList.add("show");
    }
    selectOBtn.onclick = () => {
        selectBox.classList.add("hide");
        selectnew.classList.add("show");

    }  
}
let
    turn = 'x',
    x = 0,
    o = 0

box.forEach(e => {
    e.onclick = () => {
        if (e.innerText == '') {
            e.innerText = turn
            turn == 'x' ? turn = 'o' : turn = 'x'
            winner()
        }
    }
})
// 012,345,678,
function winner() {
    const winCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    winCombination.forEach(e => {
        if (box[e[0]].innerText === box[e[1]].innerText &&
            box[e[1]].innerText === box[e[2]].innerText &&
            box[e[0]].innerText) {
            //console.log('won')
            console.log(box[e[0]].innerText + ' won ')
            box[e[0]].innerText == 'x' ? x++ : o++
            reset()
        }
        xscore.innerText = x
        oscore.innerText = o
    })
}

resetBtn.onclick = () => reset()
function reset() {
    box.forEach(e => e.innerText = '')
    turn = 'x'
}
