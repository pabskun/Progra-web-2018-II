'use strict';

const inputCedula = document.querySelector('#txtCedula');
const inputNombre =  document.querySelector('#txtNombre');
const inputCorreo = document.querySelector('#txtCorreo');
const imagenFoto = document.querySelector('#imgFoto');

const botonRegistrar = document.querySelector('#btnRegistrar');

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

        celdaCedula.innerHTML = mListaUsuarios[i][0];
        celdaNombre.innerHTML = mListaUsuarios[i][1];
        celdaCorreo.innerHTML = mListaUsuarios[i][2];

        let imagen = document.createElement('img');
        imagen.classList.add('imagen_tabla');

        let imagenUrl = mListaUsuarios[i][3];
        
        if(imagenUrl == ''){
            imagenUrl = '../img/user_placeholder.png'
        };

        imagen.src = imagenUrl;

        celdaFoto.appendChild(imagen);
    };
};

const obtenerDatosRegistro = () =>{
    let aNuevoUsuario = [];

    let sCedula = inputCedula.value;
    let sNombre = inputNombre.value;
    let sCorreo = inputCorreo.value;
    let sImagenUrl = imagenFoto.src;

    aNuevoUsuario.push(sCedula, sNombre, sCorreo, sImagenUrl);
    registrarUsuario(aNuevoUsuario);
    mostrarTablaUsuarios();

};

mostrarTablaUsuarios();
botonRegistrar.addEventListener('click', obtenerDatosRegistro);