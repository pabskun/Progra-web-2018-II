'use strict';

const inputCedula = document.querySelector('#txtCedula');
const inputNombre =  document.querySelector('#txtNombre');
const inputCorreo = document.querySelector('#txtCorreo');
const imagenFoto = document.querySelector('#imgFoto');

const botonRegistrar = document.querySelector('#btnRegistrar');

botonRegistrar.addEventListener('click', obtenerDatosRegistro);