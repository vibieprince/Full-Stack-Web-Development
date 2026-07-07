let obj = {
    item : "Pen",
    price: 10
};

let output = `The cost of ${obj.item} is ${obj.price} rupees`;
//                           ^
//                           |- it's converted to string here
console.log(output);

console.log("The cost of",obj.item,"is",obj.price,"rupees");
//                           ^
//                           |- it's number here

let Template = `This is a template Literal`;
console.log(typeof Template);

Template = `This is a template literal ${1+2+3}`;
console.log(Template);