function obtenerDias(año, mes) {
    let cantDias = new Date(año, mes + 1, 0);
    return cantDias.getDate();
}





let fechaActual = new Date();
let mesActual = fechaActual.getMonth();
let diaActual = fechaActual.getDate();


console.log(obtenerDias(hoy.getFullYear(), 5));