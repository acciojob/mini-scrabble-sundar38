let textentered=document.getElementById("evaluatedText")
let count=document.getElementById("letterCount")
textentered.addEventListener("keydown", calculate)

let countvalue=0
function calculate(e){
    countvalue++
    count.innerText=countvalue
}