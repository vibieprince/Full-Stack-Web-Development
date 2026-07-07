const student = {
    fullName : "Rahul Kumar",
    age: 20,
    cgpa: 8.2,
    isPass: true
};


let a = 35;
a = 10;
student.age += 1;
console.log(student);
console.log(typeof(student));
console.log(student["fullName"]);
console.log(student.age);
console.log(student["cgpa"]);


// const variable change nhi kar sakte but const object ki keys ke andar changes kar sakte hain
