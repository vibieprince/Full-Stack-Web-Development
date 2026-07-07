// Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value. 

let GameNum = 25;
let userVal = Number(prompt("Guess the game number"));
while(userVal!=GameNum){
    userVal = prompt("You guessed wrong!! try Again");
}
alert("Congratulations you guessed it right");
console.log("Congratulations you guessed it right");