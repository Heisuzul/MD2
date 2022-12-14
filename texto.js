function leerArchivo(e)
{
  var archivo = e.target.files[0];  
  var lector = new FileReader();
    
  lector.onload = function(e)
  {
    var contenido = e.target.result;
    mostrarContenido(contenido);
  };
  lector.readAsText(archivo);
}

function mostrarContenido(contenido)
{
  var elemento = document.getElementById('contenido-archivo');
  elemento.innerHTML = contenido;
}

document.getElementById('file-input').addEventListener('change', leerArchivo, false);




var matrizDeAdyacencia = document.querySelector("#matriz-adyacencia")
var matrizDeIncidencia = document.querySelector("#matriz-incidencia")
var listaDeAdyacencia = document.querySelector("#lista-adyacencia")


matrizDeAdyacencia.addEventListener("click",()=>{alert("lo sentimos por ahora no esta disponible")})
matrizDeIncidencia.addEventListener("click",()=>{alert("lo sentimos por ahora no esta disponible")})
listaDeAdyacencia.addEventListener("click",()=>{alert("lo sentimos por ahora no esta disponible")})


