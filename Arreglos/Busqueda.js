let peliculas = new Array("La Ballena Azul","El Dorado","Movie Dick","Sonic","La Rosa En Prosa","Amarte Duele");

peliculas.forEach((dato,indice,arreglo)=>{
    console.log((indice+1)+".-"+dato)
    console.log(arreglo);
})

document.write("<ul>");
for(indice in peliculas){
    document.write("<li>"+peliculas[indice] +"</li>");
}
document.write("</ul>");
//find
let encontrado = peliculas.findIndex(peliculas => peliculas == "La Ballena Azul");
console.log(encontrado)

let numeros = [4,5,2,4,8,1,9,1,-1];
let somes = numeros.some(numeros => numeros == 0);
console.log(somes)