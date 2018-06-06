'use strict';
let botonCalcular = document.querySelector('#btnCalcular');

botonCalcular.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    
    let nHoras1 = 0;
    let nHoras2 = 0;
    const nPorcImpuesto = 0.15;
    const nCostoHora = 25;
    let nSalario1 = 0;
    let nSubtotalSalario2 = 0;
    let nSalario2 = 0;
    let nTotal = 0;

    nHoras1 = Number(document.querySelector('#txtHoras1').value);
    nHoras2 = Number(document.querySelector('#txtHoras2').value);

    nSalario1 = nHoras1 * nCostoHora;

    nSubtotalSalario2 = nHoras2 * nCostoHora;

    nSalario2 = nSubtotalSalario2 - 
    (nSubtotalSalario2 * nPorcImpuesto);

    nTotal = nSalario1 + nSalario2;

    document.querySelector('#txtSalario1').value = nSalario1;
    document.querySelector('#txtSalario2').value = nSalario2;
    document.querySelector('#txtTotal').value = nTotal;
};

