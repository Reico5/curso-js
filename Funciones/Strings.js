var name = "Hola mundo que tal va todo? espero que bien";

console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.substr(3,7));
console.log(name.substring(2,3));
if (name.indexOf("mundo") >= 0) {
    console.log("Mundo esta en el texto")
}
if (name.search("mundo")) {
    console.log("Mundo esta en el texto")
}
if(name.includes("que tal")){
    console.log("encontrado")
}
console.log(name.length);
for (let i = 0; i < name.length; i++) {
    console.log(name.charAt(i));
}

console.log(name.replace("que","con"))
console.log(name.slice(8))
console.log(name.split(" "))

name = "   Hola mundo    "
console.log(name.trim());

//PLANTILLAS
var nombre = prompt("Introduce tu nombre");
var apellido = prompt("Introduce tu apellido");

var texto = `
    <h1>Hola Que Tal?</h1>
    <h3>Mi nombre es: ${nombre} </h3>
    <h3>Mi mi apellido es: ${apellido} </h3>
`;
document.write(texto);