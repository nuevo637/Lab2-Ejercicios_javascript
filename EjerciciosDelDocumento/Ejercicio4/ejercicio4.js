const link = document.getElementById('link');
const activar = document.getElementById('enviar');
const resultado = document.getElementById('resultado');

activar.addEventListener("click", () => {
    let palabra = link.value;
    let arr = palabra.split("https://meet.google.com/");   
    let codigoSlash = arr[1].split("?")[0];
    let codigoFinal = codigoSlash.split("-").join(""); 
    console.log(codigoFinal)
})