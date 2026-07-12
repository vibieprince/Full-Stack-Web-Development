// We are given an array of marks of students. Filter out the marks of students that scored 90+.

const marks = [87,98,46,87,94,35,95,99,57,89];

const gradeA = marks.filter((val)=>{
    return val > 90;
})

console.log(gradeA);

// Take an array n as input from user. Create an array of numbers from 1 to n.
// Use the reduce method tp calculate sum of all numbers in the array 
// Use the reduce method ro calculate product of all numbers in the array 

let n = Number(prompt("Enter a number "));

let array = [];
for(let i=1;i<=n;i++)
    array.push(i);

const calculateSum = array.reduce((prev,curr)=>{
    return prev + curr;
});

const calculateProduct = array.reduce((prev,curr)=>{
    return prev * curr;
});

console.log(calculateSum);
console.log(calculateProduct);

