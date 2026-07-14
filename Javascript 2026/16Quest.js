// Create a button element. Give it a text "click me". background color of red and text color of white.
// Insert the button as the first element inside the body tag 


let newButton = document.createElement("button");
newButton.innerText = "click me";
newButton.style.backgroundColor = "red";
newButton.style.color = "white";

document.querySelector("body").prepend(newButton);