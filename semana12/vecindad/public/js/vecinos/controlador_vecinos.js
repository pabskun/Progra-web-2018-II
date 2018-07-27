'use strict';


const imprimirGeneroPredominante = () => {
    let sGeneroPredominante = determinarGeneroPredominante();
    document.querySelector('#txtPredominante').value = `El género predominante es ${sGeneroPredominante}`;
};

imprimirGeneroPredominante();