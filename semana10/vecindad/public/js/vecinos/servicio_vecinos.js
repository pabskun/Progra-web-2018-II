'use strict';
const mVecinos = [
    ['Concha', 64, 'femenino', 1],
    ['Agata', 25, 'femenino', 1],
    ['Amandine', 46, 'femenino', 2],
    ['Porfirio', 15, 'masculino', 2],
    ['Celestino', 62, 'masculino', 2],
    ['Morgana', 4, 'femenino', 3],
    ['Maury', 34, 'masculino', 3],
    ['Leo', 37, 'masculino', 3],
    ['Constanza', 7, 'femenino', 4],
    ['Consuelo', 29, 'femenino', 4],
    ['Hermenegildo', 56, 'masculino', 5],
    ['Laudencio', 78, 'masculino', 6],
    ['Petruzca', 66, 'femenino', 6],
    ['Teodolfo', 54, 'masculino', 6],
    ['Héctor', 41, 'masculino', 7],
    ['Andrey Tercero', 17, 'masculino', 7],
    ['Aurelia', 39, 'femenino', 7],
    ['Reflejo', 21, 'femenino', 7]
];

function determinarGeneroPredominante(){
    let sGeneroPred = '';
    let nFem = 0;
    let nMasc = 0;
    let nTamanno = mVecinos.length;

    for(let i = 0; i < nTamanno; i++){
        if(mVecinos[i][2] == 'femenino'){
            nFem++;
        }else{
            nMasc++;
        }
    };
    if(nFem > nMasc){
        sGeneroPred = 'femenino';
    }else{
        sGeneroPred = 'masculino';
    }
    
    return sGeneroPred;
}

    

