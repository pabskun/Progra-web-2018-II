'use strict';
function determinarAccion(psColor){
    let sAccion = '';

    if(psColor === 'Verde'){
        sAccion = 'Continue';
    }else{
        if(psColor === 'Amarillo'){
            sAccion = 'Desacelere';
        }else{
            if(psColor === 'Rojo'){
                sAccion = 'Detenerse';
            }else{
                sAccion = 'No hay acción disponible para ese color';
            }
        }
    }
    return sAccion;
};