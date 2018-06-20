'use strict';

let botonCalcular = document.querySelector('#btnCalcular');
let inputCantNumeros = document.querySelector('#txtCantNumeros');
let outputPromedio =  document.querySelector('#txtPromedio');

botonCalcular.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    let nCantNumeros = 0;
    let nNumero = 0;
    let nSumatoria = 0;
    let nPromedio = 0;

    nCantNumeros = Number(inputCantNumeros.value);

    //Ciclo incondicional
    for(let i = 0; i < nCantNumeros; i++){
        //cuerpo del ciclo
        nNumero = Number(prompt('Ingrese el número'));
        nSumatoria  = determinarSumatoria(nSumatoria , nNumero);
    }
    nPromedio = determinarPromedio(nSumatoria, nCantNumeros);
    outputPromedio.value = nPromedio;
};
