'use strict';
let botonCambiar = document.querySelector('#btnColor');
botonCambiar.addEventListener('click', cambiarColor);

function cambiarColor(){
    let inputColor = document.querySelector('#txtColor');
    let sColor = inputColor.value;

    document.body.style.backgroundColor = sColor;
};