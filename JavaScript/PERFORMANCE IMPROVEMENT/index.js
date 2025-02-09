// Code 1
const t1 = performance.now();
for(let i=1;i<101;i++){
    let para = document.createElement('p');
    para.textContent = "This is paragraph number "+i;
    document.body.appendChild(para);
}

// Code 2 (faster)
const t2 = performance.now();

console.log("Time taken to execute code 1 is "+(t2-t1)+" milliseconds");
const t3 = performance.now();

let mydiv = document.createElement('div');

for(let i=1;i<101;i++){
    let para = document.createElement('p');
    para.textContent = "This is paragraph number "+i;
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);
const t4 = performance.now();
console.log("Time taken to execute code 2 is "+(t4-t3)+" milliseconds");