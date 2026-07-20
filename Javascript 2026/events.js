let btn1 = document.querySelector("#btn1");
btn1.onclick=(evt)=>{
    // console.log("Btn1 was clicked");
    // let a = 25;
    // a++;
    // console.log(a); //26
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
};

let div = document.querySelector("div");
div.onmouseover = () =>{
    console.log("You are inside div");
}

btn1.addEventListener("click",(evt)=>{
    console.log("Button 1 was clicked - handler1");
    console.log(evt);
    console.log(evt.type);
});

btn1.addEventListener("click",()=>{
    console.log("Button1 was clicked - handler 2");
});

const handler3 = btn1.addEventListener("click",()=>{
    console.log("Button1 was clicked - handler 3");
});
btn1.addEventListener("click",()=>{
    console.log("Button1 was clicked - handler 4");
});

btn1.removeEventListener("click",handler3);
