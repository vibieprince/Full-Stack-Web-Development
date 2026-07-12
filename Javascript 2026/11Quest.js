// Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.

function countVowels(str){
    let c = 0;
    for(let i of str){
        if(i=='a' || i=='A') c++;
        else if(i=='e' || i=='E') c++;
        else if(i=='i' || i=='I') c++;
        else if(i=='o' || i=='O') c++;
        else if(i=='u' || i=='U') c++;
    }
    return c;
}

console.log(countVowels("Hello i am prince singh"));

// Create an arrow function to perform the same task
const arrowCountVowwels = (str)=>{
    let c = 0;
    for(let i of str){
        if(i=='a' || i=='A') c++;
        else if(i=='e' || i=='E') c++;
        else if(i=='i' || i=='I') c++;
        else if(i=='o' || i=='O') c++;
        else if(i=='u' || i=='U') c++;
    }
    return c;
}

console.log(arrowCountVowwels("ApnaCollege"));