// Create a p tag in html, give it a class & some styling.
// Now create a new class in CSS and try to append this class to the p element.

// Did you notice, how you overwrite the class name when you add a new one? 
// Solve this problem using classList.

const para = document.querySelector(".content");
// const sPara = para[1];
para.classList.add("newClass"); // if we have used setAttribute then the classname must be overwritten completely. 

// now the class beomes 
// <p class="content newClass"> I am a paragraph</p>
// Now property of .content and .newClass are being applied combined from the DOM2.css
console.log(para.className);

