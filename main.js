const options = ["rock", "paper", "scissors"];

function playGame(){
   let usersChoice1 = prompt("enter your choice");
   console.log(usersChoice1);   //r,p,s

   
 if(
    usersChoice!= "rock"&&
    usersChoice!= "paper"&&
    usersChoice!= "scissors"
 ){
    alert("enter proper input");
    playGame();
    return;
 }

if(usersChoice1===null || usersChoice1===""){
    alert("enter input bro"); 
    playGame();
    return;
    
}

let usersChoice = usersChoice1.trim().toLowerCase();

   //computer choice

   let randomIndex= Math.floor(Math.random()* options.length);
   const computersChoice = options[randomIndex];
   
   console.log("users choice", usersChoice);
console.log("comp choice", computersChoice);

   //check who won this round

   //wehn user will win

   if((usersChoice==="rock" && computersChoice==="scissors") ||  
     (usersChoice==="paper" && computersChoice==="rock")||
   (usersChoice==="scissors" && computersChoice==="paper")
){
    alert("congo user.. u won!!!");

} else if 
    ((usersChoice==="scissors" && computersChoice==="rock") ||  
(usersChoice==="rock" && computersChoice==="paper")||
(usersChoice==="paper" && computersChoice==="scissors")
) {
    alert("congrats compy..u won!!!");

} else {
    alert("draw, i am sorry : (");
}

}











