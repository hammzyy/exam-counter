
const val = document.querySelector("#val");

const input = document.querySelector("input")


let value= 0;



function add(){
    if (input.value.length != 0) {
        value += Math.abs(Number(input.value))
        val.innerHTML = value
    }
    else {
        value++
        val.innerHTML = value
    }

}
function res(){
    value = 0
    val.innerHTML=value
    input.value = ""
}
function sub(){
    if (input.value.length != 0) {
        value -= Math.abs(Number(input.value))
        val.innerHTML = value
    }
    else {
        value--
        val.innerHTML = value
    }
}

