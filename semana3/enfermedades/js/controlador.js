'use strict';
let botonCalcular = document.querySelector('#btnCalcular');

botonCalcular.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    let nEnfermedad = 0;
    let nEdad = 0;
    let nDias = 0;
    let nCosto = 0;

    nEnfermedad = Number(document.querySelector('#sltEnfermedades').value);
    nEdad = Number(document.querySelector('#txtEdad').value);
    nDias = Number(document.querySelector('#txtCantDias').value);
    

    nCosto = determinarCosto(nEnfermedad, nEdad, nDias)

    document.querySelector('#txtCosto').value = nCosto;
};