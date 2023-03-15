let coleccionDeTodosLosDivs = document.getElementsByTagName("div");

let seccion = document.querySelector("#miseccion");
let valor;
for(valor in coleccionDeTodosLosDivs){
    if(typeof(coleccionDeTodosLosDivs[valor].textContent) == "string"){
        let parrafo = document.createElement("p");
        let texto = document.createTextNode(coleccionDeTodosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}
console.log(coleccionDeTodosLosDivs);