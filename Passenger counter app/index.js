let count = 0
const countEl = document.getElementById("count-el")
const saveEl = document.getElementById("save-el")

function incrementCount(){
    count++
    countEl.textContent = count
}

function save(){
    const saveCount = " " + count + " - "
    saveEl.textContent += saveCount
    count = 0
    countEl.textContent = count
    console.log(count)
}