'use strict';
const nPorcImpuesto = 0.15;
const nCostoHora = 25;

function calcularSalario1(pnHoras1){
    let nSalario1 = 0;
    
    nSalario1 = pnHoras1 * nCostoHora;
    
    return nSalario1;
};
function calcularSalario2(pnHoras2){
    let nSalario2 = 0;
    let nSubtotalSalario2 = 0;
    let nImpuesto = 0;

    nSubtotalSalario2 = pnHoras2 * nCostoHora;
    
    nImpuesto = nSubtotalSalario2 * nPorcImpuesto;

    nSalario2 = nSubtotalSalario2 - nImpuesto;
    
    return nSalario2;
};

function calcularTotal(pnSalario1, pnSalario2){
    let nTotal = 0;
    
    nTotal = pnSalario1 + pnSalario2;

    return nTotal;
};