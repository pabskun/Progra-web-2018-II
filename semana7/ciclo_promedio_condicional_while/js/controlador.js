'use strict';

let botonCalcular = document.querySelector('#btnCalcular');

let outputPromedio =  document.querySelector('#txtPromedio');

botonCalcular.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    let nCantNumeros = 0;
    let nNumero = 0;
    let nSumatoria = 0;
    let nPromedio = 0;

    nNumero = Number(prompt('Ingrese el número'));

    while(nNumero != -99){
        
        nSumatoria  = determinarSumatoria(nSumatoria , nNumero);
        
        nCantNumeros ++;
        
        nNumero = Number(prompt('Ingrese el número'));
    }
    nPromedio = determinarPromedio(nSumatoria, nCantNumeros);
    outputPromedio.value = nPromedio;
};
