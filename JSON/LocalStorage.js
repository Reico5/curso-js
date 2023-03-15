let form_register = document.getElementById("form_register");
let form_sign_up = document.getElementById("form_sign_up");
let user_index = -1;

if (localStorage.getItem("users") == null) {
  let users = [];
  localStorage.setItem("users", JSON.stringify(users));
}

form_register.addEventListener("submit", () => {
  let validado = true;
  let new_user = {
    username: document.getElementById("user_register").value,
    psw: document.getElementById("psw_register").value,
    peliculas: [],
  };

  if (new_user.username.trim() == null || new_user.username.trim().length == 0) {
    validado = false;
    document.getElementById("user_register").className = "warnign_input";
    document.getElementById("user_warning").style.display = "block";
  } else {
    document.getElementById("user_register").className = "";
    document.getElementById("user_warning").style.display = "none";
  }
  if (new_user.psw.trim() == null || new_user.psw.trim().length == 0) {
    validado = false;
    document.getElementById("psw_register").className = "warnign_input";
    document.getElementById("psw_warning").style.display = "block";
  } else {
    document.getElementById("psw_register").className = "";
    document.getElementById("psw_warning").style.display = "none";
  }
  if (validado) {
    let userFind = false;
    let aux = JSON.parse(localStorage.getItem("users"));
    for (let index in aux) {
      if (aux[index].username == new_user.username) {
        userFind = true;
        alert("Nombre de usuario ya existente");
        break;
      }
    }
    if (!userFind) {
      aux.push(new_user);
      localStorage.setItem("users", JSON.stringify(aux));
      alert("Registro Exitoso!!");
    }
  }
});
form_sign_up.addEventListener("submit", () => {
  let users = JSON.parse(localStorage.getItem("users"));
  username = document.getElementById("user_sign_up").value;
  psw = document.getElementById("psw_sign_up").value;
  for (let index in users) {
    if (users[index].username == username && users[index].psw == psw) {
      user_index = index;
      listMovies(user_index);
      document.getElementById("table_title").innerHTML = "Bienvenido usuario: " + users[index].username;
      document.getElementById("movies_table").style.display = "block";
      break;
    }
  }
});
let btn_addMovie = document.getElementById("addMovie");
btn_addMovie.addEventListener("click", () => {
  let nameMovie = prompt("Nombre de la pelicula:");
  let yearMovie = prompt("Año de estreno:");
  let generMovie = prompt("Genero:");
  let users = JSON.parse(localStorage.getItem("users"));
  users[user_index].peliculas.push({
    nombre: nameMovie,
    ano: yearMovie,
    genero: generMovie,
  });
  localStorage.setItem("users", JSON.stringify(users));
  listMovies(user_index);
});
let btn_deleteMovie = document.getElementById("deleteMovie");
btn_deleteMovie.addEventListener("click", () => {
  let index = parseInt(prompt("Que elemento de la lista deseas borrar"));
  if (index <= 0 || !isNaN(index)) {
    let users = JSON.parse(localStorage.getItem("users"));
    users[user_index].peliculas.splice(index - 1, 1);
    localStorage.setItem("users", JSON.stringify(users));
    listMovies(user_index);
  }
});

function listMovies(indes) {
  let users = JSON.parse(localStorage.getItem("users"));
  let peliculas = users[indes].peliculas;
  let listMovies = document.getElementById("listMovies");
  listMovies.innerHTML = "";
  for (let index in peliculas) {
    let liM = document.createElement("li");
    liM.append("Nombre: " + peliculas[index].nombre + " Año de estreno: " + peliculas[index].ano + " Genero: " + peliculas[index].genero);
    listMovies.append(liM);
  }
}

const mainTitle = document.querySelector("#title_head");
mainTitle.style.transition = "0.5s ease";
mainTitle.style.cursor = "pointer";
mainTitle.addEventListener("click", () => {
  setTimeout(() => {
    mainTitle.style.transform = "translateX(100000px)";
    mainTitle.style.transform = "translateY(4000px)";
    mainTitle.style.transform = "rotate(-360deg)";
    mainTitle.textContent = "8====D--- OoO";

    setTimeout(() => {
      mainTitle.style.transform = "rotate(0deg)";
      mainTitle.textContent = "Bienvenido al LocalStorage de peliculas";
    }, 1500);
  }, 1000);
});

/**
 * //Verificar compatibilidad con localStorage
if(typeof(Storage) != "undefined"){
    console.log("LocalStorage Disponible");
}else{
    console.log("LocalStorage No Disponible")
}

//Guardar un dato en localStorage
localStorage.setItem("Nombre","Julio Cesar Chavez")

//Recuperar un elemento
console.log(localStorage.getItem("Nombre"))
let nombre = document.createElement("li");
nombre.append(localStorage.getItem("Nombre"))
document.getElementById("lista_de_peliculas").append(nombre);

//Guardar un objeto
let pelicula =[
    {titulo: "El Dorado",ano: 2008,genero: "Infantil"},
    {titulo: "El Gato Con Botas",ano: 2023,genero: "Infantil"}
];
localStorage.setItem("Pelicula", JSON.stringify(pelicula))

//Recuperar Un Objeto
let peliculas = JSON.parse(localStorage.getItem("Pelicula"))
for(let index in peliculas){
    let x = document.createElement("li");
    x.append(peliculas[index].titulo)
    document.getElementById("lista_de_peliculas").append(x);
}

//Borrar Datos
localStorage.removeItem("Pelicula");
localStorage.clear();
 */
