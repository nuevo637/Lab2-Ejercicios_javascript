function obtenerDias(año, mes) {
    let cantDias = new Date(año, mes + 1, 0);
    return cantDias.getDate();
}

function diasFaltantes(año, mes, dia){
    let diaArequipa = new Date(año, 7, 15)
    let diasTotal = obtenerDias(año, mes) - dia;
    while (mes < diaArequipa.getMonth()) {
        diasTotal += obtenerDias(año, mes);
        mes += 1;
    }
    diasTotal -= diaArequipa.getDate() + 1;
    return diasTotal;
}

let hoy = new Date();
let año = hoy.getFullYear();
let dia = hoy.getDate();
let mes = hoy.getMonth();
console.log(diasFaltantes(año, mes, dia))