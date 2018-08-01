'use strict';

const inputCedula = document.querySelector('#txtCedula');
const inputNombre =  document.querySelector('#txtNombre');
const inputCorreo = document.querySelector('#txtCorreo');
const inputEdad = document.querySelector('#txtEdad');
const imagenFoto = document.querySelector('#imgFoto');

const botonRegistrar = document.querySelector('#btnRegistrar');
const botonActualizar = document.querySelector('#btnActualizar');

botonActualizar.hidden = true;

function obtenerUsuarioPorCedula (){
    botonRegistrar.hidden = true;
    botonActualizar.hidden = false;

    let sCedula = this.dataset.cedula;
    let usuario = buscarUsuarioPorCedula(sCedula);

    inputCedula.value = usuario[0];
    inputCedula.disabled = true;

    inputNombre.value = usuario[1];
    inputCorreo.value = usuario[2];
    inputEdad.value = usuario[3];
    if(usuario[4] == ''){
        imagenFoto.src = 'img/user_placeholder.png';
    }else{
        imagenFoto.src = usuario[4];
    }

};

const mostrarTablaUsuarios = () =>{
    let mListaUsuarios = obtenerListaUsuarios();
    let tbody = document.querySelector('#tblUsuarios tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < mListaUsuarios.length; i++){
        let fila = tbody.insertRow();

        let celdaFoto = fila.insertCell();
        let celdaCedula = fila.insertCell();
        let celdaNombre = fila.insertCell();
        let celdaCorreo = fila.insertCell();
        let celdaEdad = fila.insertCell();
        let celdaConfiguracion = fila.insertCell();

        celdaCedula.innerHTML = mListaUsuarios[i][0];
        celdaNombre.innerHTML = mListaUsuarios[i][1];
        celdaCorreo.innerHTML = mListaUsuarios[i][2];
        celdaEdad.innerHTML = mListaUsuarios[i][3];

        let imagen = document.createElement('img');
        imagen.classList.add('imagen_tabla');

        let imagenUrl = mListaUsuarios[i][4];
        
        if(imagenUrl == ''){
            imagenUrl = 'img/user_placeholder.png';
        };

        imagen.src = imagenUrl;

        celdaFoto.appendChild(imagen);

        let botonIconoEditar = document.createElement('a');
        botonIconoEditar.classList.add('far');
        botonIconoEditar.classList.add('fa-edit');
        botonIconoEditar.dataset.cedula = mListaUsuarios[i][0];

        botonIconoEditar.addEventListener('click' , obtenerUsuarioPorCedula);

        celdaConfiguracion.appendChild(botonIconoEditar);
    };
};

const limpiarFormulario = () =>{
    inputCedula.value = '';
    inputNombre.value = '';
    inputCorreo.value = '';
    imagenFoto.src = 'img/user_placeholder.png';
    inputEdad.value = 0;
};
const obtenerDatosRegistro = () =>{
    let aNuevoUsuario = [];

    let sCedula = inputCedula.value;
    let sNombre = inputNombre.value;
    let sCorreo = inputCorreo.value;
    let sImagenUrl = imagenFoto.src;
    let nEdad = Number(inputEdad.value);

    aNuevoUsuario.push(sCedula, sNombre, sCorreo, nEdad, sImagenUrl);
    registrarUsuario(aNuevoUsuario);
    mostrarTablaUsuarios();
    limpiarFormulario();

};

const obtenerDatosActualizar = () =>{
    let aUsuarioModificado = [];

    let sCedula = inputCedula.value;
    let sNombre = inputNombre.value;
    let sCorreo = inputCorreo.value;
    let sImagenUrl = imagenFoto.src;
    let nEdad = Number(inputEdad.value);

    aUsuarioModificado.push(sCedula, sNombre, sCorreo, nEdad, sImagenUrl);
    modificarUsuario(aUsuarioModificado);
    mostrarTablaUsuarios();
    limpiarFormulario();
    botonActualizar.hidden = true;
    botonRegistrar.hidden = false;
    inputCedula.disabled = false;

};

mostrarTablaUsuarios();
botonRegistrar.addEventListener('click', obtenerDatosRegistro);
botonActualizar.addEventListener('click', obtenerDatosActualizar);