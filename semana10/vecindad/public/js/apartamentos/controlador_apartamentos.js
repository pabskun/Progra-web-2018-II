'use strict';

const inputId = document.querySelector('#txtId');
const inputNombre = document.querySelector('#txtNombre');
const inputMetros = document.querySelector('#txtMetros');
const inputCantInq = document.querySelector('#txtCantInquilinos');

const botonRegistrar = document.querySelector('#btnRegistrar');

botonRegistrar.addEventListener('click', obtenerDatos);

mostrarTablaApartamentos();

function obtenerDatos(){
    let nId = Number(inputId.value);
    let sNombre = inputNombre.value;
    let nMetros = Number(inputMetros.value);
    let nCantInquilinos = Number(inputCantInq.value);

    let nuevoApartamento = [];

    nuevoApartamento.push(nId, sNombre, nMetros, nCantInquilinos);

    registrarApartamento(nuevoApartamento);
    mostrarTablaApartamentos();
};

function mostrarTablaApartamentos(){
    const mApartamentos = obtenerListaApartamentos();
    const tbody = document.querySelector('#tblApartamentos tbody');

    tbody.innerHTML = '';
    
    for(let i = 0; i < mApartamentos.length; i++){
        let fila = tbody.insertRow();

        let celdaId = fila.insertCell();
        let celdaNombre = fila.insertCell();
        let celdaTamanno = fila.insertCell();
        let celdaInquilinos = fila.insertCell();

        celdaId.innerHTML = mApartamentos[i][0];
        celdaNombre.innerHTML = mApartamentos[i][1];
        celdaTamanno.innerHTML = mApartamentos[i][2];
        celdaInquilinos.innerHTML = mApartamentos[i][3];

    };
};