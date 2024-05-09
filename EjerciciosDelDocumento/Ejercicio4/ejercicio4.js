const link = document.getElementById('link');
const activar = document.getElementById('enviar');
const resultado = document.getElementById('resultado');

activar.addEventListener("click", () => {
    let palabra = link.value;
    let arr = palabra.split("com/");   
    let resultado = arr[1];
    console.log(resultado)
})