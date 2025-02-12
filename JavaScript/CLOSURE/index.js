let name = "Manish";
function outerFunction(){
    let name = "Prince Singh"; // name is a global variable created by init
    function innerFunction() { // innerFunction() is the inner function, a closure
        let name = "Prince"
        console.log(name); // use variable declared in the parent function
    }
    innerFunction();
}
outerFunction();