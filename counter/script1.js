// counter

const countdownbtn = document.getElementById("countdown");
const resetbtn = document.getElementById("reset");
const countupbtn = document.getElementById("countup");
const countlabel = document.getElementById("countlabel");

let count = 0;

countupbtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}

countdownbtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}
  
resetbtn.onclick = function() {
    count = 0;
    countlabel.textContent = count;
}