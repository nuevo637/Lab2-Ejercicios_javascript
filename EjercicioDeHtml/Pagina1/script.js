const texto = document.getElementById('texto');
const btnAumentar = document.getElementById('aumentar');
const btnDisminuir = document.getElementById('disminuir');

btnAumentar.addEventListener('click', () =>{
    let tamaño = parseFloat(window.getComputedStyle(texto).getPropertyValue("font-size"));
    texto.style.color = "RGB(0,0,0)";
    texto.style.fontSize = (tamaño + 10) + "px";
}); 

btnDisminuir.addEventListener('click', () =>{
    let tamaño = parseFloat(window.getComputedStyle(texto).getPropertyValue("font-size"));
    texto.style.color = "yellow";
    texto.style.fontSize = (tamaño - 10) + "px";
}); 

function aleatorio(){
    return Math.random() * (255 - 0) + min;
}