
listarColores("Rojo","Azul","Amarillo","Cafe","Blanco","Negro")

var arregloColores = ["Morado", "Dorado","Lola"];
listarColores(...arregloColores, "Magenta")

function listarColores(colorUno, colorDos, ...colorN) {
    console.log("Color "+colorUno);
    console.log("Color "+ colorDos);
    console.log(colorN);
    console.log("***************************************")
}