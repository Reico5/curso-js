/**
 * 1.-Pida 6 numeros por patnalla y los meta en un array /
 * 2.-Mostrar el array entero en el cuerpo de la pagina y consola/
 * 3.-Ordenarlo y mostrarlo /
 * 4.-Invertir su orden y mostrarlo /
 * 5.-Mostrar cuantos elementos tiene un array /
 * 6.-Busqueda de un valor introducido por el usuario
 */

let numeros = [];

for (let index = 0; index < 6; index++) {
    numeros[index] = parseInt(prompt("Dijita un numero:",0))
}

logArra(numeros,"")
numeros.sort((a,b)=> a-b)
logArra(numeros,"Ordenados")
numeros.reverse();
logArra(numeros, "Invertido")
document.write("<h1>EL Arrglo Tiene "+numeros.length+" Elementos</h1>")

let buscar = parseInt(prompt("Que numero deseas buscar: ",0))
if(numeros.indexOf(buscar) >= 0){
    document.write("<h2>El Elemento "+buscar+" esta en la posicion "+numeros.indexOf(buscar)+"</h2>")
}else{
    document.write("<h2>Elemento no encontrado</h2>")
}

function logArra(elementos, custom){
    console.log(elementos)
    document.write("<h1>El Arreglo "+custom+"</h1>")
    document.write("<ul>")
    elementos.forEach(elementos => {
        document.write("<li>"+elementos+"</li>")
    });
    document.write("</ul>")
}