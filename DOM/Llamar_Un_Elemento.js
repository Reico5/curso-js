

//let caja = document.getElementById("caja");
let caja = document.querySelector("#caja");

caja.style.color = "white"
caja.style.background = "red";
caja.style.margin = "200px";
caja.className = "Motrolo";

function cambiarTexto(texto){
    caja.innerHTML = texto;
}
function cambiarColorDeFondo(texto){
    caja.style.background = texto;
}
console.log(caja)