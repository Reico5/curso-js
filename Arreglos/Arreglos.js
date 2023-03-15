var hola_mundo = ["Hola", "Mundo", "Como", "Va","Todo",23,true];
var pais = new Array("Mexico","Colombia","Argentina");
var nombre = new Array(5);

nombre[0] = "Lola";
nombre[2] = "La trailera";

if(nombre[1]!=null){
    console.log("Vacio")
}

document.write("<ul>");
for (let index = 0; index < pais.length; index++) {
    document.write("<li>"+pais[index]+"</li>");
}
document.write("</ul>");
console.log(nombre)

/* 
if(x >= pais.length)

*/