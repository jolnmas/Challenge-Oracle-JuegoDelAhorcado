var buttonReiniciar= document.querySelector('#buttonIcon1Left');
var layourPalabras= document.querySelector('.palabra');
var layoutLineas= document.querySelector('.linea-palabra');
buttonReiniciar.addEventListener('click',function(){
    resetAll();
});


function resetAll(){
  setTecladoVirtual(true);
    while (layourPalabras.hasChildNodes()) {
        layourPalabras.removeChild(layourPalabras.firstChild);
      }
    while (layoutLineas.hasChildNodes()) {
        layoutLineas.removeChild(layoutLineas.firstChild);
      }
  var ventana=document.getElementById("vent");
    ventana.style.display="none";
    setValuesToCero();
    initialize();
}
