const generarTablaBtn = document.getElementById("genTabla");
const input = document.getElementById("cantNumeros");
const tabla = document.getElementById("tablaGenerada");
const calcularTotalBtn = document.getElementById("calcTotal");
const totalP = document.getElementById("resultado");
let totalSuma = 0;

generarTablaBtn.addEventListener("click", () => {
    const numValores = parseInt(input.value);
    totalSuma = 0;
    generarTabla(numValores);
});

calcularTotalBtn.addEventListener("click", () => {
    totalP.textContent = totalSuma;
});

function generarTabla(numValores) {
    tabla.innerHTML = "";
    totalSuma = 0;

    const numColumnas = Math.ceil(Math.sqrt(numValores)); 
    const numFilas = Math.ceil(numValores / numColumnas); 

    for (let i = 0; i < numFilas; i++) {
        const fila = document.createElement("tr");
        for (let j = 0; j < numColumnas; j++) {
            const celda = document.createElement("td");
            if (numValores > 0) {
                const valor = Math.floor(Math.random() * 100); 
                totalSuma += valor; 
                celda.textContent = valor;
                numValores--;
            } else {
                celda.textContent = "";
            }
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
}