let paras = document.querySelectorAll('p'); // We have given all paragraph tags to paras variable

// This is not good because we are adding individual listeners to individual para, better to use 1 listener for all the paras
// for(let i=0;i<paras.length;i++){
//     let para = paras[i];
//     para.addEventListener('click',function(){
//         alert("You clicked on para number "+(i+1));
//     })
// }  


function alertPara(event){
    // for only span 
    if(event.target.nodeName === 'SPAN')
        alert("You clicked on"+event.target.textContent);
}

// for(let i=0;i<paras.length;i++){
//     let para = paras[i];
//     para.addEventListener('click',alertPara(i));
// }

let mydiv = document.getElementById('wrapper');
document.addEventListener('click',alertPara);