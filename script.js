
const val = document.querySelector("#val");

const input = document.querySelector("input")


let num= 0;



function add(){
    if (input.num.length != 0) {
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

