'use strict';
let inputColor = document.querySelector('#txtColor');
inputColor.addEventListener('change', cambiarColor);

function cambiarColor(){
    let sColor = inputColor.value;
    document.body.style.backgroundColor = sColor;
};