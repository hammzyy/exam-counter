let num= 0;

const value = document.querySelector("#val");
const plus = document.querySelector("#increase");
const minus = document.querySelector("#decrease");
const reset = document.querySelector("#reset")

function add(){
    num+=1;
    value.innerHTML = num;
};

function sub(){
    num-=1;
    value.innerHTML = num;
};

function res(){
    num=0;
    value.innerHTML = num;
};
