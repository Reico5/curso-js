window.addEventListener("load",()=>{
    let btn_changemode = document.getElementById("btn_darkmode")
    let btn_interval_start = document.getElementById("btn_Start")
    let btn_interval_stop = document.getElementById("btn_Stop")
    let inpt_text = document.getElementById("ipt_texto")
    let caja = document.getElementById("all")
    let light = true;
    let intervalo_mode = false;
    
    btn_changemode.style.background = "#F5F5DC"
    btn_changemode.style.padding = "5px"
    btn_changemode.style.borderRadius = "5px"
    btn_changemode.style.border = "3px solid"
    
    btn_interval_start.addEventListener("click",intervalo)
    btn_interval_stop.addEventListener("click",intervalo)

    btn_changemode.addEventListener("click",changeMode)
    btn_changemode.addEventListener("mouseover",onButton)
    btn_changemode.addEventListener("mouseout",outButton)
    inpt_text.addEventListener("focus",focus)
    inpt_text.addEventListener("keydown", keyDownEvent)
    inpt_text.addEventListener("keypress", keyPressEvent)
    inpt_text.addEventListener("keyup", keyUpEvent)
    inpt_text.addEventListener("blur", exit)
    
    function changeMode(){
        btn_changemode.style.transitionProperty = "border-color"
        btn_changemode.style.transitionDuration = "1s"
        caja.style.transitionProperty = "background-color, color"
        caja.style.transitionDuration = "1s"
        if(light){  
            btn_changemode.style.borderColor = "white"  
            caja.style.background = "black";
            caja.style.color = "white";
            light=false
        }else{
            btn_changemode.style.borderColor = "black"  
            caja.style.background = "white";
            caja.style.color = "black";
            light=true;
        }
    }
    
    function onButton(){
        btn_changemode.style.transitionProperty = "background-color, color"
        btn_changemode.style.transitionDuration = "0.4s"
        if(light){
            btn_changemode.style.background = "black"
            btn_changemode.style.color = "#F5F5DC"
        }else{
            btn_changemode.style.background = "#F5F5DC"
            btn_changemode.style.color = "black"
        }
    }
    function outButton(){
        btn_changemode.style.transitionProperty = "background-color, color"
        btn_changemode.style.transitionDuration = "0.4s"
        if(light){
            btn_changemode.style.background = "#F5F5DC"
            btn_changemode.style.color = "black"
        }else{
            btn_changemode.style.background = "black"
            btn_changemode.style.color = "#F5F5DC"
        }
    }
    
    function focus() {
        let title = document.getElementById("title")
        title.innerHTML = "Has Entrado en la caja de texto"
    }
    
    function exit() {
        let title = document.getElementById("title")
        let subtitle = document.getElementById("subtitle")
        let divuno = document.getElementById("div_uno")
        let divdos = document.getElementById("div_dos")
        let divtres = document.getElementById("div_tres")
        title.innerHTML = "Alexis"
        divuno.innerHTML = "Que onda, soy el primer div"
        divdos.innerHTML = "Como te va, ahora soy el segundo div"
        divtres.innerHTML = "Que tal todo, me llamo tercer div"
        subtitle.innerHTML = ""
    }
    
    function keyDownEvent(event) {
        let title = document.getElementById("div_uno")
        let subtitle = document.getElementById("subtitle")
        subtitle.innerHTML+=String.fromCharCode(event.keyCode)
        title.innerHTML = "Se ha ejecutado el KeyDow se ha presionado la tecla: "
        title.innerHTML += String.fromCharCode(event.keyCode)
    } 
    
    function keyPressEvent(event) {
        let title = document.getElementById("div_dos")
        title.innerHTML = "Se ha ejecutado el KeyPress se ha presionado la tecla: "
        title.innerHTML += String.fromCharCode(event.keyCode)
    } 
    
    function keyUpEvent(event) {
        let title = document.getElementById("div_tres")
        title.innerHTML = "Se ha ejecutado el KeyPress se ha presionado la tecla: "
        title.innerHTML += String.fromCharCode(event.keyCode)
    }
    
    function intervalo(){
        let timer = setInterval(changeMode,2000)
        if(intervalo_mode){
            clearInterval(timer)
        }
        intervalo_mode = true  
    }
})

