const btn = document.getElementById('btnactivar');
const palabra = document.getElementById('palabra');
const resultado = document.getElementById('resultado');

btn.addEventListener("click", () =>{
    let string = palabra.value;
    let arr = resultado.innerHTML.split(" ");
    arr[1] = string.split("").reverse().join("");
    resultado.innerHTML = arr.join(" ");
    palabra.value = "";
});