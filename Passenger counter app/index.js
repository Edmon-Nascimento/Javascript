let count = 0
const countTxt = document.getElementById("count-el")

const increamentBtn = document.getElementById("increment-btn")

function incrementCount(){
    count++
    countTxt.innerText = count
}