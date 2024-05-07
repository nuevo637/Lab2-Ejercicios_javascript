const texto = document.getElementById('texto');
const btnAumentar = document.getElementById('aumentar');
const btnDisminuir = document.getElementById('disminuir');

btnAumentar.addEventListener('click', () =>{
    let tamaño = parseFloat(window.getComputedStyle(texto).getPropertyValue("font-size"));
    texto.style.color = aleatorio();
    texto.style.fontSize = (tamaño + 10) + "px";
}); 

btnDisminuir.addEventListener('click', () =>{
    let tamaño = parseFloat(window.getComputedStyle(texto).getPropertyValue("font-size"));
    texto.style.color = aleatorio();
    texto.style.fontSize = (tamaño - 10) + "px";
}); 

function aleatorio(){
    let numero1 = Math.random() * (255);
    let numero2 = Math.random() * (255);
    let numero3 = Math.random() * (255);
    
    let rgb = "RGB(" + numero1 + "," + numero2 + ","+ numero3 +")";
    return rgb;
}