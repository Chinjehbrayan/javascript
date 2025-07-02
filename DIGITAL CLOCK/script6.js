// digital clock

function updateClock(){

const now = new Date();
let hours = now.getHours().toString().padStart(2, 0);
const meridien = hours>= 12 ? "PM" :"AM";
hours =hours % 12 || 12;
hours = hours.toString().padStart(2, 0);
const minute = now.getMinutes().toString().padStart(2, 0);
const sencond = now.getSeconds().toString().padStart(2, 0);
const timestring = `${hours}:${minute}:${sencond}`;
document.getElementById("clock").textContent = timestring
}

updateClock();
setInterval(updateClock, 1000);