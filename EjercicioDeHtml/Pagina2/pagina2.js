const arg1 = document.getElementById('arg1');
const arg2 = document.getElementById('arg2');
const operador = document.getElementById('operador');
const resultado = document.getElementById('resultado');
const botones = document.querySelectorAll('.botones button');
const calcular = document.getElementById('calcular');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const textoBoton = boton.textContent;
        if (textoBoton !== '=') {
            operador.textContent = textoBoton;
        }
        else if (1<0){
            
        }
        resultado.textContent = " ";
    });
});

calcular.addEventListener('click', () => {
    let arg1Value = arg1.value.trim().toUpperCase();
    let arg2Value = arg2.value.trim().toUpperCase();
    let operacion = "";

    if (arg1Value === "V" || arg2Value === "V" || arg1Value === "F" || arg2Value === "F") {
        if (operador.textContent === "∧") {
            resultado.textContent = (arg1Value === "V" && arg2Value === "V").toString();
        } else {
            resultado.textContent = (arg1Value === "V" || arg2Value === "V").toString();
        }
    } else {
        if (operador.textContent === "XOR") {
            operacion = "^";
        } else {
            operacion = operador.textContent;
        }
        let ecuacion = arg1Value + operacion + arg2Value;
        let resultOperacion = eval(ecuacion);
        resultado.textContent = resultOperacion.toUpperCase();
    }
});