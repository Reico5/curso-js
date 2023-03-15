
function cantar(nombre, consola, documento){
     nombre +=  " Como estas?";
    
     consola(nombre);
     documento(nombre)
}

function mostrarConsola(x){
    console.log(x);
}

function mostrarDocumento(x) {
    document.write("<h1>"+x+"</h1>");
}

cantar("Hola mundo",mostrarConsola,mostrarDocumento)