// change array by applying 30% off on each item 
let item = [250,645,300,900,50];
for(let i=0;i<item.length;i++)
    item[i] -= item[i] * 0.1;

console.log(item);