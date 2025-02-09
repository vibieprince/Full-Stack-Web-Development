// function changeText(){
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = 'Hello World';
// }

// let fpara = document.getElementById('fpara');
// fpara.addEventListener('click', changeText);
// fpara.removeEventListener('click', changeText);


// function changeText(event){
//     console.log(event);
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = 'Hello World';
// }

// let fpara = document.getElementById('fpara');
// fpara.addEventListener('click', changeText);


// Now let's change the default behavior of anchor tag
let anchorElement = document.getElementById('anchor');

anchorElement.addEventListener('click', function(event){
    event.preventDefault();
    anchorElement.textContent = 'khud search karle';
});