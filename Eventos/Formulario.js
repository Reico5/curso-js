window.addEventListener("load", ()=>{
    console.log("DOM CARGADO!!")
    let formulario = document.getElementById("formulario");
    let box_dashed = document.getElementById("box_dashed")

    box_dashed.style.display = "none";

    formulario.addEventListener("submit", ()=>{
        let nombre = document.getElementById("nombre").value;
        let apellidos = document.getElementById("apellidos").value;
        let edad =parseInt(document.getElementById("edad").value);
        let validado = true;

        if(nombre.trim() == null || nombre.trim().length == 0){
            document.getElementById("nombre").className = "warning";
            document.getElementById("nombre_Error").style.display = "block";
            validado = false;
        }else{
            document.getElementById("nombre").className = "";
            document.getElementById("nombre_Error").style.display = "none";
        }
        if(apellidos.trim() == null || apellidos.trim().length == 0){
            document.getElementById("apellidos").className = "warning";
            document.getElementById("apellidos_Error").style.display = "block";
            validado = false;
        }else{
            document.getElementById("apellidos").className = "";
            document.getElementById("apellidos_Error").style.display = "none";
        }
        if(edad == null || edad < 0 || isNaN(edad)){
            document.getElementById("edad").className = "warning";
            document.getElementById("edad_Error").style.display = "block";
            validado = false;
        }else{
            document.getElementById("edad").className = "";
            document.getElementById("edad_Error").style.display = "none";
        }

        if(validado){
            let p_nombre = document.getElementById("p_nombre");
            let p_apellido = document.getElementById("p_apellido");
            let p_edad = document.getElementById("p_edad");

            p_nombre.innerHTML= nombre;
            p_apellido.innerHTML= apellidos;
            p_edad.innerHTML= edad;
            console.log(nombre, apellidos , edad)
            box_dashed.style.display = "block";
        }
        
    })
})