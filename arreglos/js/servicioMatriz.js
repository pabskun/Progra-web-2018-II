'use strict';

let matrizNumeros = [
    [1, 13, 11],
    [19, 3, 27],
    [17, 21, 7],
    [9, 17, 23]
];

function determinarSumatoria(){
    let nSumatoria = 0;
    let nCantFilas = matrizNumeros.length; 

    // Ciclo de las filas
    for(let i=0; i < nCantFilas; i++){
        // Ciclo de las columnas
        // matrizNumeros[i].length => cantidad de columnas
        for(let j=0; j < matrizNumeros[i].length; j++){
            nSumatoria += matrizNumeros[i][j];
        };
    };
    return nSumatoria;
};

function determinarPromedio(){
    let nSumatoria = 0;
    let nPromedio = 0;
    let nCantidad = 0;

    nSumatoria = determinarSumatoria();
    
    // filas * columnas
    nCantidad = matrizNumeros.length * matrizNumeros[0].length;

    nPromedio = nSumatoria / nCantidad;

    return nPromedio;
};