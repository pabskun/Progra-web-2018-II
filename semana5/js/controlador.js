'use strict';
let botonRegistrar = document.querySelector('#btnRegistrar');
botonRegistrar.addEventListener('click', obtenerDatos);

let inputNombre1 = document.querySelector('#txtNombre1');
let inputNombre2 = document.querySelector('#txtNombre2');
let inputApellido1 = document.querySelector('#txtApellido1');
let inputApellido2 = document.querySelector('#txtApellido2'); 
let inputFechaNacimiento = document.querySelector('#txtFechaNacimiento');
let inputEdad = document.querySelector('#txtEdad');
let inputCorreo = document.querySelector('#txtCorreo');
let inputTelefono = document.querySelector('#txtTelefono');
let inputContrasenna = document.querySelector('#txtContrasenna');
let inputConfirmacion = document.querySelector('#txtConfirmacion');

function obtenerDatos(){
    let sNombre1 = inputNombre1.value;
    let sNombre2 = inputNombre2.value;
    let sApellido1 = inputApellido1.value;
    let sApellido2 = inputApellido2.value;
    let dFechaNacimiento = new Date(inputFechaNacimiento.value);
    let nEdad = Number(inputEdad.value);
    let sCorreo = inputCorreo.value;
    let sTelefono = inputTelefono.value;
    let sContrasenna = inputContrasenna.value;
    let sConfirmacion = inputConfirmacion.value;
    let bError = validar();

    if(bError == true){
        console.log('No se pudo registrar el usuario, revise los campos en rojo');
    }else{
        console.log(sNombre1, sNombre2, sApellido1, sApellido2, dFechaNacimiento, nEdad, sCorreo, sTelefono, sContrasenna);
    }
    
};

function validar(){
    let bError = false;

    return bError;
};