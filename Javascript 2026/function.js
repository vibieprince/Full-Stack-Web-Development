function myFunction(message,n){
    console.log(message);
    // console.log(message*n); --> NaN
}

myFunction("I love Javascript",100);


function sum(x,y){
    return x+y;
}

console.log(sum(3,6)); 

// Arrow functions -- Introduced in modern js
const arrowSum = (a,b)=>{
    console.log(a+b);
}

console.log(arrowSum);
arrowSum(6,7);

const printHello = ()=>{
    console.log("Hello");
}

printHello();