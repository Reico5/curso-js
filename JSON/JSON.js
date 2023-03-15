let pelicula ={
    titulo: "Al filo del mañana",
    ano: 2017,
    genero: "Accion"
};

let peliculas =[
    {titulo: "Avatar", ano: 2007, genero: "Comedia"},
    {titulo: "El Dorad", ano: 2050, genero: "Terror"},
    {titulo: "asd", ano: 2007, genero: "Comedia"},
    {titulo: "El Doasdasdasdrad", ano: 2050, genero: "Terror"},
    pelicula
];

for(let index in peliculas){
    let li = document.createElement("li")
    li.append("Titulo: "+peliculas[index].titulo+"| año: "+peliculas[index].ano);
    document.getElementById("lista_de_peliculas").append(li);
}