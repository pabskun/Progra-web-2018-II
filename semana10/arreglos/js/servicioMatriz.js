'use strict';
const mPersonas = [
    [21, 'Melody'],
    [33, 'Gustavo'],
    [47, 'Andrés'],
    [19, 'María']
];

const determinarPersonaMayor = () => {
    let nEdadMayor = 0;
    let sMayor = '';
    let nTamanno = mPersonas.length;

    for(let i = 0; i < nTamanno; i++){
        if(mPersonas[i][0] > nEdadMayor){
            nEdadMayor = mPersonas[i][0];
            sMayor = mPersonas[i][1];
        }
    };

    return sMayor;
}

// function determinarPersonaMayor(){
//     let nEdadMayor = 0;
//     let sMayor = '';
//     let nTamanno = mPersonas.length;

//     for(let i = 0; i < nTamanno; i++){
//         if(mPersonas[i][0] > nEdadMayor){
//             nEdadMayor = mPersonas[i][0];
//             sMayor = mPersonas[i][1];
//         }
//     };

//     return sMayor;
// };

function determinarPersonaMenor(){
    let nEdadMenor = 999999;
    let sMenor = '';
    let nTamanno = mPersonas.length;

    for(let i = 0; i < nTamanno; i++){
        if(mPersonas[i][0] < nEdadMenor){
            nEdadMenor = mPersonas[i][0];
            sMenor = mPersonas[i][1];
        }
    };

    return sMenor;
};