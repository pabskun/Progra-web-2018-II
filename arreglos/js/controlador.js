'use strict';

let botonSumatoria = document.querySelector('#btnSumatoria');
let outSumatoria = document.querySelector('#txtResultadoSumatoria');

botonSumatoria.addEventListener('click', imprimirSumatoria);

function imprimirSumatoria(){
    let nSumatoria = 0;

    nSumatoria = determinarSumatoria();

    outSumatoria.value = nSumatoria;
}