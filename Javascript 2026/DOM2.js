let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

let p = document.querySelector("p")
console.log(p.getAttribute("class"));


p.setAttribute("class","newClass");

console.log(p.getAttribute("class"));

console.log(div.style);
div.style.backgroundColor = "green";
// div.style.visibility = "hidden";

let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn.innerText);

// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
div.after(newBtn);

let newHeading = document.createElement("h2");
newHeading.innerText = "Hello this a new Heading";

// p.append(newHeading);

document.querySelector("body").prepend(newHeading);

p.remove();
newHeading.remove();