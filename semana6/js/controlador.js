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

let sNombre1 = '';
let sNombre2 = '';
let sApellido1 = '';
let sApellido2 = '';
let dFechaNacimiento = '';
let nEdad = 0;
let sCorreo = '';
let sTelefono = '';
let sContrasenna = '';
let sConfirmacion = '';


function obtenerDatos() {
    sNombre1 = inputNombre1.value;
    sNombre2 = inputNombre2.value;
    sApellido1 = inputApellido1.value;
    sApellido2 = inputApellido2.value;
    dFechaNacimiento = new Date(inputFechaNacimiento.value);
    nEdad = Number(inputEdad.value);
    sCorreo = inputCorreo.value;
    sTelefono = inputTelefono.value;
    sContrasenna = inputContrasenna.value;
    sConfirmacion = inputConfirmacion.value;

    let bError = validar();

    if (bError == true) {
        swal({
            type : 'warning',
            title: 'Algo ocurrió',
            text: 'No se pudo realizar el registro, verifique los campos en rojo',
            confirmButtonText: 'Entendido'
        });


        console.log('No se pudo registrar el usuario, revise los campos en rojo');
    } else {

        console.log(sNombre1, sNombre2, sApellido1, sApellido2, dFechaNacimiento, nEdad, sCorreo, sTelefono, sContrasenna);
        swal({
            type : 'success',
            title: 'Registro exitoso',
            text: 'El usuario se ha registrado con éxito',
            confirmButtonText: 'Entendido'
        });
    }

};

function validar() {
    let bError = false;
    let regexSoloLetras = /^[a-zA-Z]+$/;
    let regexSoloNumeros = /^[0-9]{1,3}$/;

    //Validación del campo de nombre1
    if (sNombre1 == '' || regexSoloLetras.test(sNombre1)== false ) {
        bError = true;
        inputNombre1.classList.add('input-error');
    } else {
        inputNombre1.classList.remove('input-error');
    }

    //Validación del campo de apellido1
    if (sApellido1 == '') {
        bError = true;
        inputApellido1.classList.add('input-error');
    } else {
        inputApellido1.classList.remove('input-error');
    }

    //Validación del campo de fecha
    if (inputFechaNacimiento.value == '') {
        bError = true;
        inputFechaNacimiento.classList.add('input-error');
    } else {
        inputFechaNacimiento.classList.remove('input-error');
    }

    //Validación del campo de edad
    if (nEdad == '' || nEdad < inputEdad.min || nEdad > inputEdad.max || regexSoloNumeros.test(nEdad) == false ) {
        bError = true;
        inputEdad.classList.add('input-error');
    } else {
        inputEdad.classList.remove('input-error');
    }

    //Validación del campo de correo electrónico
    if (sCorreo == '') {
        bError = true;
        inputCorreo.classList.add('input-error');
    } else {
        inputCorreo.classList.remove('input-error');
    }
    //Validación del campo de teléfono
    if (sTelefono == '') {
        bError = true;
        inputTelefono.classList.add('input-error');
    } else {
        inputTelefono.classList.remove('input-error');
    }
    //Validación del campo de contraseña
    if (sContrasenna == '' || sContrasenna != sConfirmacion) {
        bError = true;
        inputContrasenna.classList.add('input-error');
        inputConfirmacion.classList.add('input-error');
    } else {
        inputContrasenna.classList.remove('input-error');
        inputConfirmacion.classList.remove('input-error');
    }


    return bError;
};