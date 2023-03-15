
calificar(6,5, dato =>{
    console.log("El promedio es: "+dato);
}, dato => {
    if(dato>=6){
        console.log("aprobado")
    }else{
        console.log("reprobado")
    }
})

function calificar(calificacion1, calificacion2, mostrarPromedio, aprueba) {
    let promedio = (calificacion1+calificacion2)/2

    mostrarPromedio(promedio);
    aprueba(promedio);
}