 const mybox =document.getElementById("mybox");
 const movement = 100;
 let x =0;
 let y =0;
  
 document.addEventListener("keydown", event => {
       mybox.textContent = "don't do it😲";
       mybox.style.backgroundColor = "red";
       
 });
 document.addEventListener("keyup", event =>{
       mybox.style.backgroundColor = "lightgreen";
        mybox.textContent = "click me 😁";
 });

 document.addEventListener("keydown", event => {

       if(event.key.startsWith("Arrow")){

              
              switch(event.key){
                     case "ArrowUp":
                            y -= movement;
                            break;
                     case "ArrowDown":
                            y +=movement;
                            break;
                     case "ArrowLeft":
                            x -=movement;
                            break;
                     case "ArrowRight":
                            x +=movement;
                            break;
              }
              mybox.style.top =`${y}px`;
              mybox.style.left =`${x}px`;
              

       }
 });


 //const myBtn =document.getElementById("myBtn");

 //function changeColor(event){
        //event.target.style.backgroundColor = "Blue";
        //event.target.textContent = "OUCH";
 //}

/* mybox.addEventListener("click", function(event){
       event.target.style.backgroundColor = "Blue";
        event.target.textContent = "OUCH 🤕";
 });*/

 /*myBtn.addEventListener("click", event =>{
       mybox.style.backgroundColor = "Blue";
       mybox.textContent = "OUCH 🤕";
 });
  
 myBtn.addEventListener("mouseover", event => {
       mybox.style.backgroundColor = "red";
       mybox.textContent = "don't do it 😲";
 });
 myBtn.addEventListener("mouseout", event =>{
       mybox.style.backgroundColor = "lightgreen";
        mybox.textContent = "click me 😁";
 });*/
  
 /*document.addEventListener("keydown", event => {
       mybox.textContent ="don't do it 😲";
       mybox.style.backgroundColor = "red";
 });
document.addEventListener("keyup", event => {
       mybox.textContent ="OUCH 🤕   ";
       mybox.style.backgroundColor = "lightgreen";
});*/
