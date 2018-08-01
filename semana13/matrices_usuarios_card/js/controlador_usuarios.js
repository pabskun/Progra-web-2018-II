'use strict';

const inputCedula = document.querySelector('#txtCedula');
const inputNombre =  document.querySelector('#txtNombre');
const inputCorreo = document.querySelector('#txtCorreo');
const inputEdad = document.querySelector('#txtEdad');
const imagenFoto = document.querySelector('#imgFoto');
const sectionUsuarios = document.querySelector('#sct_usuarios');

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
     sectionUsuarios.innerHTML = '';

     for(let i = 0; i < mListaUsuarios.length; i++ ){
        let card_div = document.createElement('div');
        card_div.classList.add('card');
   
        let image_container = document.createElement('div');
        image_container.classList.add('img_container');
   
        let imagen = document.createElement('img');
        
        if(mListaUsuarios[i][4] == ''){
           imagen.src = 'img/user_placeholder.png';
        }else{
           imagen.src = mListaUsuarios[i][4];
        }
   
        let nameTitle = document.createElement('h2');
        nameTitle.innerHTML = mListaUsuarios[i][1];
   
        let mailTitle = document.createElement('h3');
        mailTitle.innerHTML = mListaUsuarios[i][2];
   
        let ageTitle = document.createElement('h4');
        ageTitle.innerHTML = mListaUsuarios[i][3];
   
        let botonActualizar = document.createElement('button');
        botonActualizar.type ='button';
        botonActualizar.textContent = 'Actualizar';
        botonActualizar.dataset.cedula = mListaUsuarios[i][0];
        botonActualizar.classList.add('button');
        botonActualizar.addEventListener('click', obtenerUsuarioPorCedula);
   
        image_container.appendChild(imagen);
   
        card_div.appendChild(image_container);
        card_div.appendChild(nameTitle);
        card_div.appendChild(mailTitle);
        card_div.appendChild(ageTitle);
        card_div.appendChild(botonActualizar);
   
        sectionUsuarios.appendChild(card_div);
     }
     
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