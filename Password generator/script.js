const txtPassword = document.querySelector("p#txt-password")
const btnCopy = document.querySelector("button#btn-copy")
const btnGenerate = document.querySelector("button#btn-generate")

const lowercase = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]
const uppercase = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]
const numbers = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
]
const symbols = [
  "!", "@", "#", "$", "%", "&", "*", "(", ")"
]

const lengthInput = document.querySelector("#length")
const uppercaseCheckbox = document.querySelector("#uppercase")
const numbersCheckbox = document.querySelector("#numbers")
const symbolsCheckbox = document.querySelector("#symbols")
const lengthDisplay = document.querySelector("#length-display")

lengthDisplay.textContent = lengthInput.value

lengthInput.addEventListener("input", () => {
    lengthDisplay.textContent = lengthInput.value
})

btnGenerate.addEventListener("click", ()=>{
    let chars = []
    chars.push(...lowercase)
    
    if (uppercaseCheckbox.checked) {
        chars.push(...uppercase)
    }
    if (numbersCheckbox.checked) {
        chars.push(...numbers)
    }
    if (symbolsCheckbox.checked) {
        chars.push(...symbols)
    }
    
    const length = parseInt(lengthInput.value)
    let randomIndex
    let password = []
    
    for( let c = 0; c < length; c++){
        randomIndex = Math.floor(Math.random()*chars.length)
        password.push(chars[randomIndex])
    }
    txtPassword.textContent = password.join("")
})

btnCopy.addEventListener("click", ()=>{
    navigator.clipboard.writeText(txtPassword.textContent)
    
})