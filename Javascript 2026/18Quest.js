// Create a toggle button that changes the screen to dark mode when clicked & light-mode when clicked again.
let modebutton = document.querySelector("#mode");
let currMode = "light";
modebutton.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode = "dark";
        // document.querySelector("body").style.backgroundColor="black";
        document.body.classList.remove("light");
        document.body.classList.add("dark");

        // Or use
        // document.body.classList.toggle("dark");
    }
    else{
        currMode = "light";
        // document.querySelector("body").style.backgroundColor="white";
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        // Or use
        // document.body.classList.toggle("light");
    }
    console.log(currMode);
});