'use strict';

const botonMayor =  document.querySelector('#btnMayor');
const botonMenor =  document.querySelector('#btnMenor');
const outMayor = document.querySelector('#txtResultadoMayor');
const outMenor = document.querySelector('#txtResultadoMenor');

botonMayor.addEventListener('click', mostrarMayor);
botonMenor.addEventListener('click', mostrarMenor);

function mostrarMayor(){
    let sMayor = determinarPersonaMayor();
    outMayor.value = 'La persona de mayor edad es: ' + sMayor;
}



function mostrarMenor(){
    let sMenor = determinarPersonaMenor();
    outMenor.value = `La persona de menor edad es: ${sMenor}`;
}