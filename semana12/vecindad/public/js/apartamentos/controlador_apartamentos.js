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
        
        //Linea nueva
        let celdaAgregarInquilinos = fila.insertCell();

        celdaId.innerHTML = mApartamentos[i][0];
        celdaNombre.innerHTML = mApartamentos[i][1];
        celdaTamanno.innerHTML = mApartamentos[i][2];
        celdaInquilinos.innerHTML = mApartamentos[i][3];

        //Linea nueva para crear el enlace de agregar inquilinos
        
        //Se crea el boton 'enlace' para agregar inquilinos
        let botonAgregarInquilino = document.createElement('a');
        botonAgregarInquilino.href = '#'; // para que no redireccione a ningún otro lugar y se quede en la página actual
        botonAgregarInquilino.id = mApartamentos[i][0]; //Se agrega el id del apartamento dentro del atributo id de html
        botonAgregarInquilino.innerHTML = 'Agregar inquilinos'; //Texto a mostrar
        
        celdaInquilinos.appendChild(botonAgregarInquilino);//Se agrega el botón y se coloca como hijo de la celda para que aparezca en el html

        //Creación dinámica del evento click para todos los enlaces
        botonAgregarInquilino.addEventListener('click', solicitarInfoInquilinos);


    };
};

function solicitarInfoInquilinos(){
    let idApto = Number(this.id); //Esta línea permite obtener el valor del atributo id que tiene asociado el botón que llama a ésta función (recordar que trae el id del apartamento)
    let nInquilinos = obtenerCantidadInquilinos(idApto);
    
    for(let i = 0; i < nInquilinos; i++){
        let aNuevoInquilino = [];

        let sNombre  = prompt('Ingrese el nombre');
        let nEdad  = Number(prompt('Ingrese la edad'));
        let sGenero  = prompt('Ingrese el género');

        aNuevoInquilino.push(sNombre, nEdad, sGenero, idApto);

        agregarInquilino(aNuevoInquilino);//esta función se encuentra en el servicio de vecinos
    }

}