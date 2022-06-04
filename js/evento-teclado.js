
var palabraSecreta ="kissland";
var habilitarTecladoVirtual=true;
var inputDeviceCel="";
var inputMovil= document.querySelector('#input-agregar-palabra-movil');
var newWord="";
var inputDesktop= document.querySelector('#input-agregar-palabra');
window.addEventListener("keyup", function (event) {
  if(validarChart(event.key)){//
        if(habilitarTeclado){
            var p=event.key;
            if(getStatePlaying){
              ingresarLetra(p.toLocaleUpperCase());
              }
        }
    }
  else{
   }
  },false);

function refrescarPalabra(){
    inputMovil.textContent=newWord;
  }
  
function setNullNewWord(){
    newWord="";
    refrescarPalabra();
  }
  
function validarChart(text){
    var reg = /[a-zA-Z]/gi
     if(text.length>1 || !reg.test(text)){
        alert("TECLA INVALIDA");
        inputDesktop.value="";
        return false;
     }
     else{
      return true;
     }
}

function validarAllSameChart(palabra){
  var auxPalabra=palabra[0];
  var contador=0;
  for(const elem in palabra){
      if(auxPalabra==palabra[elem]){
          contador++;
      }
  }
  if(contador==palabra.length){
    return true;
  }
  else{
    return false;
  }
}


var buttonTecladoVirtuaQ= document.querySelector('#button-Q');
buttonTecladoVirtuaQ.addEventListener('click',function(){
  if(habilitarTecladoVirtual){
       ingresarLetra("Q");
    }
    else{
         if(newWord.length<8){
             newWord=newWord+"Q";
             refrescarPalabra();
           }
    }
});

var buttonTecladoVirtuaW= document.querySelector('#button-W');
buttonTecladoVirtuaW.addEventListener('click',function(){
  if(habilitarTecladoVirtual){
      ingresarLetra("W");
  }
  else{
      if(newWord.length<8){
         newWord=newWord+"W";
         refrescarPalabra();
      }
  }
});

var buttonTecladoVirtuaE= document.querySelector('#button-E');
buttonTecladoVirtuaE.addEventListener('click',function(){
  if(habilitarTecladoVirtual){
  ingresarLetra("E");
  }
  else{
      if(newWord.length<8){
         newWord=newWord+"E";
         refrescarPalabra();
      }
  }
});

var buttonTecladoVirtuaR= document.querySelector('#button-R');
buttonTecladoVirtuaR.addEventListener('click',function(){
  if(habilitarTecladoVirtual){
     ingresarLetra("R");
  }
  else{
      if(newWord.length<8){
        newWord=newWord+"R";
        refrescarPalabra();
      }
  }
});

var buttonTecladoVirtuaT= document.querySelector('#button-T');
buttonTecladoVirtuaT.addEventListener('click',function(){
  if(habilitarTecladoVirtual){
    ingresarLetra("T");
  }
  else{
     if(newWord.length<8){
         newWord=newWord+"T";
         refrescarPalabra();
     }
  }
});

var buttonTecladoVirtuaY= document.querySelector('#button-Y');
buttonTecladoVirtuaY.addEventListener('click',function(){
  if(habilitarTecladoVirtual){
    ingresarLetra("Y");
  }
  else{
     if(newWord.length<8){
        newWord=newWord+"Y";
        refrescarPalabra();
  }
}
});

var buttonTecladoVirtuaU= document.querySelector('#button-U');
buttonTecladoVirtuaU.addEventListener('click',function(){
  if(habilitarTecladoVirtual){
     ingresarLetra("U");
  }
  else{
     if(newWord.length<8){
        newWord=newWord+"U";
        refrescarPalabra();
  }
}
});

var buttonTecladoVirtuaI= document.querySelector('#button-I');
buttonTecladoVirtuaI.addEventListener('click',function(){
  if(habilitarTecladoVirtual){
     ingresarLetra("I");
  }
  else{
    if(newWord.length<8){
        newWord=newWord+"I";
        refrescarPalabra();
  }
}
});

var buttonTecladoVirtuaO= document.querySelector('#button-O');
buttonTecladoVirtuaO.addEventListener('click',function(){
  if(habilitarTecladoVirtual){
      ingresarLetra("O");
  }
  else{
    if(newWord.length<8){
        newWord=newWord+"O";
        refrescarPalabra();
  }
}
});

var buttonTecladoVirtuaP= document.querySelector('#button-P');
buttonTecladoVirtuaP.addEventListener('click',function(){
  if(habilitarTecladoVirtual){
      ingresarLetra("P");
  }
  else{
    if(newWord.length<8){
         newWord=newWord+"P";
         refrescarPalabra();
  }
}
});

var buttonTecladoVirtuaA= document.querySelector('#button-A');
buttonTecladoVirtuaA.addEventListener('click',function(){
  if(habilitarTecladoVirtual){
      ingresarLetra("A");
  }
  else{
    if(newWord.length<8){
         newWord=newWord+"A";
         refrescarPalabra();
  }
}
});

var buttonTecladoVirtuaS= document.querySelector('#button-S');
buttonTecladoVirtuaS.addEventListener('click',function(){
  if(habilitarTecladoVirtual){
    ingresarLetra("S");
  }
  else{
    if(newWord.length<8){
        newWord=newWord+"S";
         refrescarPalabra();
  }
}
});

var buttonTecladoVirtuaD= document.querySelector('#button-D');
buttonTecladoVirtuaD.addEventListener('click',function(){
  if(habilitarTecladoVirtual){
      ingresarLetra("D");
  }
  else{
    if(newWord.length<8){
         newWord=newWord+"D";
         refrescarPalabra();
  }
}
});

var buttonTecladoVirtuaF= document.querySelector('#button-F');
buttonTecladoVirtuaF.addEventListener('click',function(){
  if(habilitarTecladoVirtual){
     ingresarLetra("F");
  }
  else{
    if(newWord.length<8){
        newWord=newWord+"F";
        refrescarPalabra();
  }
}
});

var buttonTecladoVirtuaG= document.querySelector('#button-G');
buttonTecladoVirtuaG.addEventListener('click',function(){
  if(habilitarTecladoVirtual){
      ingresarLetra("G");
  }
  else{
    if(newWord.length<8){
        newWord=newWord+"G";
        refrescarPalabra();
  }
}

});
var buttonTecladoVirtuaH= document.querySelector('#button-H');
buttonTecladoVirtuaH.addEventListener('click',function(){
  if(habilitarTecladoVirtual){
      ingresarLetra("H");
  }
  else{
    if(newWord.length<8){
        newWord=newWord+"H";
        refrescarPalabra();
  }
}

});
var buttonTecladoVirtuaJ= document.querySelector('#button-J');
buttonTecladoVirtuaJ.addEventListener('click',function(){
  if(habilitarTecladoVirtual){
      ingresarLetra("J");
  }
  else{
    if(newWord.length<8){
         newWord=newWord+"J";
         refrescarPalabra();
  }
}

});
var buttonTecladoVirtuaK= document.querySelector('#button-K');
buttonTecladoVirtuaK.addEventListener('click',function(){
  if(habilitarTecladoVirtual){
      ingresarLetra("K");
  }
  else{
    if(newWord.length<8){
        newWord=newWord+"K";
        refrescarPalabra();
  }
}

});
var buttonTecladoVirtuaL= document.querySelector('#button-L');
buttonTecladoVirtuaL.addEventListener('click',function(){
  if(habilitarTecladoVirtual){
      ingresarLetra("L");
  }
  else{
    if(newWord.length<8){
        newWord=newWord+"L";
        refrescarPalabra();
  }
}

});
var buttonTecladoVirtuaNN= document.querySelector('#button-Ñ');
buttonTecladoVirtuaNN.addEventListener('click',function(){
  if(habilitarTecladoVirtual){
      ingresarLetra("Ñ");
  }
  else{
    if(newWord.length<8){
        newWord=newWord+"Ñ";
        refrescarPalabra();
  }
}

});
var buttonTecladoVirtuaZ= document.querySelector('#button-Z');
buttonTecladoVirtuaZ.addEventListener('click',function(){
  if(habilitarTecladoVirtual){
      ingresarLetra("Z");
  }
  else{
    if(newWord.length<8){
        newWord=newWord+"Z";
        refrescarPalabra();
  }
}
});

var buttonTecladoVirtuaX= document.querySelector('#button-X');
buttonTecladoVirtuaX.addEventListener('click',function(){
  if(habilitarTecladoVirtual){
      ingresarLetra("X");
  }
  else{
    if(newWord.length<8){
        newWord=newWord+"X";
        refrescarPalabra();
  }
}
});

var buttonTecladoVirtuaC= document.querySelector('#button-C');
buttonTecladoVirtuaC.addEventListener('click',function(){
  if(habilitarTecladoVirtual){
    ingresarLetra("C");
  }
  else{
    if(newWord.length<8){
        newWord=newWord+"C";
        refrescarPalabra();
  }
}
});

var buttonTecladoVirtuaV= document.querySelector('#button-V');
buttonTecladoVirtuaV.addEventListener('click',function(){
  if(habilitarTecladoVirtual){
     ingresarLetra("V");
  }
  else{
    if(newWord.length<8){
         newWord=newWord+"V";
         refrescarPalabra();
  }
}
});

var buttonTecladoVirtuaB= document.querySelector('#button-B');
buttonTecladoVirtuaB.addEventListener('click',function(){
  if(habilitarTecladoVirtual){
      ingresarLetra("B");
  }
  else{
    if(newWord.length<8){
         newWord=newWord+"B";
         refrescarPalabra();
  }
}
});

var buttonTecladoVirtuaN= document.querySelector('#button-N');
buttonTecladoVirtuaN.addEventListener('click',function(){
  if(habilitarTecladoVirtual){
      ingresarLetra("N");
  }
  else{
    if(newWord.length<8){
        newWord=newWord+"N";
        refrescarPalabra();
  }
}
});

var buttonTecladoVirtuaM= document.querySelector('#button-M');
buttonTecladoVirtuaM.addEventListener('click',function(){
  if(habilitarTecladoVirtual){
    ingresarLetra("M");
  }
  else{
    if(newWord.length<8){
         newWord=newWord+"M";
         refrescarPalabra();
  }
}
});


var buttonBorrar= document.querySelector('#button-borrar');
buttonBorrar.addEventListener('click',function(){
  if(!habilitarTecladoVirtual){ 
      newWord = newWord.substring(0, newWord.length - 1);
      refrescarPalabra();
  }
});

function setTecladoVirtual(b){
  habilitarTecladoVirtual=b;
}

