'use strict';
let botonDeterminar = document.querySelector('#btnDeterminar');
botonDeterminar.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    let sAccion = '';
    let sColor = '';

    let selectColor = document.querySelector('#sltColor');
    sColor = selectColor.value;

    sAccion = determinarAccion(sColor);

    document.querySelector('#txtAccion').value = sAccion;
};
