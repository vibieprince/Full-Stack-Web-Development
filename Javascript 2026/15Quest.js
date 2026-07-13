// Create 3 divs with common class name - "box". Access them & add some unique text to each of them.

let divs = document.querySelectorAll(".box");
console.log(divs);

console.log(divs[1]);

divs[0].innerText = "new unique value 1";

let i = 1;
for(let div of divs){
    div.innerText = `new unique value ${i}`;
    i++;
}