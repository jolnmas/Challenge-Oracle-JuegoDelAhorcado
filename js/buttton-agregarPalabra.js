
var buttonIconAgregar= document.querySelector('#buttonIcon2Left');
buttonIconAgregar.addEventListener('click',function(){
        desabilitarTeclado();
        setTecladoVirtual(false);
        var menssage=document.querySelector(".mensaje");
        menssage.style.display="none";
        var ventanaAgregar=document.querySelector(".layout-agregar-palabra");
        ventanaAgregar.style.display="block";
        setNullNewWord();
});

var buttonAgregarPalabra= document.querySelector('#button-agregar');
buttonAgregarPalabra.addEventListener('click',function(){
 obtenerPalabra();
});

var newPalabra=document.querySelector("#input-agregar-palabra");
var newPalabraMovil=document.querySelector("#input-agregar-palabra-movil");

function obtenerPalabra(){
  var resolutionWith=window.screen.availWidth;
        if(resolutionWith>1000){
            var palabra=newPalabra.value;
            newPalabra.value="";
            if(!validarAllSameChart(palabra)){
                agregarNuevaPalabra(palabra);
            }
            else{
                alert("Invalido....");
                newPalabra.value="";
            }
        }
        else{
           if(validarTamanhoPalabra(newPalabraMovil.textContent)){
                 agregarNuevaPalabra(newPalabraMovil.textContent);
           }
           else{
               alert("Palabra Invalida");
           }
        }
        setNullNewWord();
        newPalabraMovil.textContent="";
}


function validarTamanhoPalabra(text){
 var cont=0;
    for(const elem in text){
         if(text[0]==text[elem]){
             cont++;
          }
    }
   if(text.length<4||text.length>8||cont==text.length){
        return false
    }
   else{
       return true;
   }
}



   



