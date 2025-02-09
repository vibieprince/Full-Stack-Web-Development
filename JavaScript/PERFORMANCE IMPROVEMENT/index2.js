let fragment = document.createDocumentFragment('p');

for(let i=1;i<101;i++){
    let para = document.createElement('p');
    para.textContent = "This is paragraph number "+i;
    fragment.appendChild(para);
}
// the below line takes 1 reflow 1 repaint
document.body.appendChild(fragment); // this is faster than appending 100 times