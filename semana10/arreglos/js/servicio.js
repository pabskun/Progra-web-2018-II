'use strict';

let listaNumeros = [1, 7, 9, 3];


function determinarSumatoria(){
    let nSumatoria = 0;
    let nTamanno = listaNumeros.length;

    for(let i = 0; i < nTamanno; i++){
        nSumatoria += listaNumeros[i];
    };
    return nSumatoria;
};

function determinarPromedio(){
    let nSumatoria = 0;
    let nPromedio = 0;

    nSumatoria = determinarSumatoria();
    nPromedio = nSumatoria / listaNumeros.length;

    return nPromedio;
};