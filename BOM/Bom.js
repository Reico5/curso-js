//BASICAMENTE TODO LO QUE ES EL BUSCADOR
function getBom(){
    console.log(window.innerWidth)
    console.log(screen.width)
    console.log(window.innerHeight)
    console.log(screen.height)
    console.log(window.location)
}

function redireccionar(url){
    window.location.href = url
}

function abrirVentana(url) {
    window.open(url,"","width=450,height=450")
}

function cerrarVentana(){
    window.close()
}