let num= 0;

const value = document.querySelector("#val");
const plus = document.querySelector("#increase");
const minus = document.querySelector("#decrease");
const reset = document.querySelector("#reset")
const input = document.innerHTML("input")





function add(){
    if (input.value.length != 0) {
        num += Math.abs(Number(input.num))
        val.innerHTML = num
    }
    else {
        num++
        val.innerHTML = num
    }

}
function res(){
    num = 0
    val.innerHTML=num
    input.num = ""
}
function sub(){
    if (input.num.length != 0) {
        num -= Math.abs(Number(input.num))
        val.innerHTML = num
    }
    else {
        num--
        val.innerHTML = num
    }
}

