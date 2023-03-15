
function crearCita(cita, callback){ 
    var miCita = "Como yo siempre digo, " + cita;
    callback(miCita); // 2
  }
  
  function logCita(cita){
    console.log(cita);
  }
  
  crearCita("come tus vegetales!", logCita); // 1
  
  /**crearCita("come tus vegetales!", function(cita){ 
  console.log(cita); 
}); */

  // Resultado en la consola: 
  // Como yo siempre digo, come tus vegetales!

  function solicitudServidor(consulta, callback){
    setTimeout(function(){
      var respuesta = consulta + "lleno!";
      callback(respuesta);
    },5000);
  }
  
  function obtenerResultados(resultados){
    console.log("Respuesta del servidor: " + resultados);
  }
  
  solicitudServidor("El vaso está medio  ", obtenerResultados);
  
  //Resultado en la consola luego de 5 segundos:
  // El vaso está medio lleno!

