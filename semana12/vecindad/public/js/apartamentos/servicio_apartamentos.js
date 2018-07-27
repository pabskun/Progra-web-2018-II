'use strict';
// const mApartamento = [
//     [1, 'Apartamento rojo', 100, 2],
//     [2, 'Apartamento verde', 120, 3],
//     [3, 'Apartamento negro', 160, 3],
//     [4, 'Apartamento amarillo', 90, 2],
//     [5, 'Apartamento azul', 75, 1],
//     [6, 'Apartamento blanco', 107, 3],
//     [7, 'Apartamento tornasol', 185, 4]
// ];

function registrarApartamento(pNuevoApartamento){
    let mApartamentos = obtenerListaApartamentos();
    mApartamentos.push(pNuevoApartamento);

    localStorage.setItem('mApartamentosLS', JSON.stringify(mApartamentos));
};

function obtenerListaApartamentos(){
    let mApartamentos = JSON.parse(localStorage.getItem('mApartamentosLS'));

    if(mApartamentos == null){
        mApartamentos = [
            [1, 'Apartamento rojo', 100, 2],
            [2, 'Apartamento verde', 120, 3],
            [3, 'Apartamento negro', 160, 3],
            [4, 'Apartamento amarillo', 90, 2],
            [5, 'Apartamento azul', 75, 1],
            [6, 'Apartamento blanco', 107, 3],
            [7, 'Apartamento tornasol', 185, 4]
        ];
    }
    
    return mApartamentos;
};
function obtenerCantidadInquilinos(pId){
    let listaApartamentos = [];
    let nCantInquilinos = 0;

    listaApartamentos = obtenerListaApartamentos();

    for(let i = 0; i < listaApartamentos.length; i++){
        if(listaApartamentos[i][0] == pId){
            nCantInquilinos = listaApartamentos[i][3];
        }
    }
    return nCantInquilinos;
}