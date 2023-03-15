let peliculas = ["La Ballena Azul","El Dorado","Movie Dick","Sonic"];

let elemento="";

do{
    elemento = prompt("Que Pelicula Deseas Agregar?");
    peliculas.push(elemento);
}while(elemento != 'Fin');
peliculas.pop();
console.log(peliculas)

let indice = parseInt(prompt("Que elemento deseas eliminar del arreglo"));

peliculas.splice(indice,1)
console.log(peliculas)

