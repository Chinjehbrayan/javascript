// random num GEN

const mybutton = document.getElementById("mybutton");
const lable1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

mybutton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    
    lable1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}