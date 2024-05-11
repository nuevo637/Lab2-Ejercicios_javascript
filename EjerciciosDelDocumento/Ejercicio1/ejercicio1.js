function diaActual(){
    let date = new Date();
    let day = date.getDay();
    const arr = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Sabado"];
    return arr[day];
}
console.log(diaActual());