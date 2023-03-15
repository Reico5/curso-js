/*let DivsRojos = document.getElementsByClassName("rojo");
for(var i in DivsRojos){
    if( DivsRojos[i].className == "rojo"){
        DivsRojos[i].style.background = "red";
    }
}
console.log(DivsRojos)

let DivMorado = document.getElementById("morado")
DivMorado.style.background = "purple"
*/
let btn_changemode = document.getElementById("btn_darkmode")
let divs = document.getElementsByClassName("light")
let caja = document.getElementById("caja")
let light = true;
btn_changemode.addEventListener("click",change)

function change(){
    if(light){
        for(let i = 0; i < divs.length; i++){
            divs[i].style.background = "black"
            divs[i].style.color = "white"
        }
        light=false
    }else{
        for(let i = 0; i < divs.length; i++){
            divs[i].style.background = "white"
            divs[i].style.color = "black"
        }
        light=true;
    }
}