let eBotonCalcular = document.querySelector('#btnCalcular');

eBotonCalcular.addEventListener('click', leerDatos);

function leerDatos(){
    // Declaración de las variables
    let nNumero1 = 0;
    let nNumero2 = 0;
    let nNumero3 = 0;
    let nPromedio = 0;

    // Lectura de los datos que se toman del formulario
    nNumero1 = Number(document.querySelector('#txtNumero1').value);
    nNumero2 = Number(document.querySelector('#txtNumero2').value);
    nNumero3 = Number(document.querySelector('#txtNumero3').value);

    nPromedio = calcularPromedio(nNumero1 , nNumero2, nNumero3);

    document.querySelector('#txtPromedio').value = nPromedio;
};