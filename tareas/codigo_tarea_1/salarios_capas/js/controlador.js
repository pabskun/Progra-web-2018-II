'use strict';
let botonCalcular = document.querySelector('#btnCalcular');

botonCalcular.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    
    let nHoras1 = 0;
    let nHoras2 = 0;
    let nSalario1 = 0;
    let nSalario2 = 0;
    let nTotal = 0;

    nHoras1 = Number(document.querySelector('#txtHoras1').value);
    nHoras2 = Number(document.querySelector('#txtHoras2').value);

    nSalario1 = calcularSalario1(nHoras1);
    nSalario2 = calcularSalario2(nHoras2);
    nTotal = calcularTotal(nSalario1 , nSalario2);

    document.querySelector('#txtSalario1').value = nSalario1;
    document.querySelector('#txtSalario2').value = nSalario2;
    document.querySelector('#txtTotal').value = nTotal;
};

