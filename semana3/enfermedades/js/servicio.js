'use strict';
function determinarCosto(pnEnfermedad, pnEdad, pnDias){
    const nEdadMin = 14;
    const nEdadMax = 22;
    let nCostoDia = 0;
    let nPorcentaje = 0;
    let nSubtotal =0;
    let nRecargo = 0;
    let nCostoTotal = 0;

    switch(pnEnfermedad){
        case 1:
            nCostoDia = 25;
        break;

        case 2:
            nCostoDia = 16;
        break;

        case 3:
            nCostoDia = 20;
        break;

        case 4:
            nCostoDia = 32;
        break;

        default:
            nCostoDia = 0;
        break;
    };
    nSubtotal = nCostoDia * pnDias;
    
    if( (pnEdad >= nEdadMin) && (pnEdad <= nEdadMax) ){
        nPorcentaje = 0.10;
    };

    nRecargo =  nSubtotal * nPorcentaje;

    nCostoTotal = nSubtotal + nRecargo;

    return nCostoTotal;
};