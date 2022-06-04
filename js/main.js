

const array = ["ORACLE", "POSITIVO", "ESCALAR","ALURA","VECTORIAL","LANGOSTA","COLUMNA","VERTICAL","INVIERNO",
"ESPACIO","ENCONTRAR","LUMINOSO", "MUTANTE","PANTALLA","CONSERJE","CHOFER","COMANDO","UNIVERSO","INDUSTRIA"]; 
var arrayUsedWord=[];
var errores=0;
var aciertos=0;
var alreadyUsed=0;
var yaPresionados=0;
var damage=0;
var band=0;
var bloquearButton=0;
var arrayUsados=[];
var habilitarTeclado=true;
var total=aciertos+alreadyUsed;
var listaDeLetras = document.querySelector(".palabra");  
var globalPalabraRandom="";
var tecladoVirtual=document.querySelector(".teclado-virtual-flex");
var pantalla = document.querySelector(".layout-area-drawing");
var pincel = pantalla.getContext("2d");
var statePlaying=true;
var arrayNumeroSorteado=[];

initialize();

function initialize(){
    var palabraRandom=sortearPlabra();
    globalPalabraRandom=palabraRandom;
    startGame(palabraRandom);
}

function crearElementoLetra(word,id){
    var newLetra=document.createElement("li");
    newLetra.textContent=word;
    newLetra.classList.add('letra');
    newLetra.setAttribute("id", id);
    listaDeLetras.appendChild(newLetra);
    var listaLineas= document.querySelector(".linea-palabra");  
    var linea=document.createElement("li");
    linea.classList.add('linea');
    listaLineas.appendChild(linea);
}

function getStatePlaying(){
return statePlaying;
}

function ingresarLetra(word){
   if(statePlaying){
        const myUniqueArray = [...new Set(arrayUsados)]; 
        var arrayPosiciones=[];
        var cont=0;
        var letraEncontrada=false;
        var letraYaPresionada=false;
        for(const elem in myUniqueArray){
             if(word==myUniqueArray[elem]){
                 letraYaPresionada=true;
             }
        }
        if(letraYaPresionada){
        }
        else{
            for(const elem in globalPalabraRandom){
                 if(word==globalPalabraRandom[elem]){
                    letraEncontrada=true;
                    arrayPosiciones.push(elem);
                    cont++;
                    }
            }
            if(letraEncontrada){
                aciertos=aciertos+cont;
                for(const elem in arrayPosiciones){
                    var auxWord = listaDeLetras.querySelector("#a"+arrayPosiciones[elem]);
                    auxWord.classList.replace("letra-oculta","letra");
                 }
            }
            else{
                errores=errores+1;
                if(damage<=49.2){
                    damage=damage+8.2;
                    recivirDahno(damage);
                }
            }
        total=aciertos+alreadyUsed;
        arrayUsados.push(word);
        // gana 
        if(aciertos+alreadyUsed==globalPalabraRandom.length){
             win();
        }
        //pierde
        if(errores>="6"){
             gameOver();
        }
        agregarLetrasUsadas();
        }
    }
}


function setValuesToCero(){
    damage=0;
    errores=0;
    aciertos=0;
    alreadyUsed=0;
    yaPresionados=0;
    arrayUsados=[];
    habilitarTeclado=true;
    statePlaying=true;
    var danho=document.querySelector("#damage");
    danho.style.width="0%";
    var imagenResult=document.querySelector(".imagen-Resultado");
    imagenResult.style.display="block";
    var palabraRevelada=document.getElementById("palabra-revelada");
    palabraRevelada.style.display="block";
    pincel.clearRect(0,0, pantalla.width,pantalla.height);
    pincel.beginPath();
    pincel.moveTo(0,0);
    pincel.rotate(0);
    pincel.translate(0,0);
}



function agregarLetrasUsadas(){
    var list = document.querySelector(".word-used-flex"); 
    const myUniqueArray = [...new Set(arrayUsados)]; 
    myUniqueArray.reverse()
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
      }
    for(const elem in myUniqueArray){
       if(elem<8){
            crearElementoLeftPanel(myUniqueArray[elem]);
       } 
    }
}


function crearElementoLeftPanel(elememto){
    var lista = document.querySelector(".word-used-flex"); 
    var letraPanelIzquiedo=document.createElement("li");
    letraPanelIzquiedo.textContent=elememto;
    letraPanelIzquiedo.classList.add('left-word');
    lista.appendChild(letraPanelIzquiedo);
}

function gameOver(){
    desabilitarTeclado();
    setTecladoVirtual(false);
    statePlaying=false;
    setTimeout(function(){ 
        var ventana=document.getElementById("vent");
        ventana.style.display="block";
        var textoResultado=document.getElementById("resultado");
        textoResultado.textContent="¡ Perdiste !";
        var imagenResult=document.querySelector(".imagen-Resultado");
        imagenResult.style.display="none";
        var palabraRevelada=document.getElementById("palabra-revelada");
        palabraRevelada.textContent=globalPalabraRandom;
        crearButton(ventana);
        refrescarPagina();
    }
    , 500);
}

function win(){
    desabilitarTeclado();
    setTecladoVirtual(false);
    statePlaying=false;
    setTimeout(function(){ 
        var ventana=document.getElementById("vent");
        ventana.style.display="block";
        var textoResultado=document.getElementById("resultado");
        textoResultado.textContent="¡ Ganaste !";
        var palabraRevelada=document.getElementById("palabra-revelada");
        palabraRevelada.style.display="none";
        crearButton(ventana);
        refrescarPagina();
     }
    , 200); 
}


function refrescarPagina(){
    var buttonReiniciar= document.querySelector('.button-reiniciar');
    buttonReiniciar.addEventListener('click',function(){
    band=0;
    resetAll();
});
}

function desabilitarTeclado(){
    habilitarTeclado=false;
}


function crearButton(vent){
    if(bloquearButton==0){
        var button=document.createElement("button");
        button.classList.add('button-reiniciar');
        var imagen=document.createElement("img");
        imagen.src="assets/reiniciar.png";
        imagen.classList.add('img-button-reiniciar');
        button.appendChild(imagen);
        vent.appendChild(button);
        bloquearButton=1;
    }
}


function agregarNuevaPalabra(w){
    w.toLocaleUpperCase();
    array.push(w);
    agregarDelayMensajeNuevaPalabra();
}


function agregarDelayMensajeNuevaPalabra(){
    var mensj=document.querySelector(".mensaje");
    mensj.style.display="block";
    setTimeout(function(){ 
        mensj.style.display="none";
     }
    , 5000);
}


 function sortearPlabra(){
    return array[getRandomNumber()];
 }

 function getRandomNumber(){
    if(arrayNumeroSorteado.length<(array.length)){
    var numAleatorio = Math.round(Math.random()*(array.length-1));
    while(arrayNumeroSorteado.includes(numAleatorio)){
        numAleatorio = Math.round(Math.random()*(array.length-1));
    }
        arrayNumeroSorteado.push(numAleatorio);
        return numAleatorio
    }
    else{
        arrayNumeroSorteado=[];
        band=0;
        resetAll();
    }
 }


function startGame(palabraRandom){
    var listaDeLetras = document.querySelector(".palabra");  
    for(const elem in palabraRandom){
        crearElementoLetra(palabraRandom[elem],"a"+elem);
    }
    for(const elem in palabraRandom){
        var words = listaDeLetras.querySelector("#a"+elem);
        var firstWord=palabraRandom[0];
        if(firstWord==palabraRandom[elem]){
            words.classList.add("letra");
            arrayUsados.push(firstWord)
            alreadyUsed++;
        }
        else{
            words.classList.replace("letra", "letra-oculta");
        }
    }
    agregarLetrasUsadas();
}


function recivirDahno(valor){
     var danho=document.querySelector("#damage");
     danho.style.width=valor+"%";
     if(errores==1){
        dibujarRectangulo(40, 130, 30, 15, "grey") ;
        dibujarRectangulo(50, 20, 10, 120, "grey") ;
     }
     if(errores==2){
        dibujarRectangulo(35, 10, 120, 10,"grey") ;
        dibujarRectangulo(150, 10, 10, 22, "grey") ;
     }
     if(errores==3){
        //HEAD 
        dibujarCirculo(155, 45,15,"purple");
     }
     if(errores==4){
         //BODY
        dibujarRectangulo(152, 57, 5, 50, "purple") ;
     }
     if(errores==5){
        //left amr
        draw(122,120,153,155,80,75,65,70);
         //right amr
        draw(153,155,188,186,70,65,75,80); 
     }
     if(errores==6){
         //left leg
        draw(155,157,180,178,107,100,140,147);
        //right leg
         draw(128,152,154,130,140,100,107,147);
     }
 }


 function dibujarRectangulo(x1,x2,y1,y2,color) {
    pincel.fillStyle = color;
    pincel.fillRect(x1, x2, y1, y2) ;
    pincel.strokeStyle="black";
 }

function dibujarCirculo(x, y, radio, color) {
    pincel.fillStyle=color;
    pincel.beginPath();
    pincel.arc(x, y, radio, 0, 2*3.14);
    pincel.fill();
}

function draw(x1,x2,x3,x4,y1,y2,y3,y4){
    pincel.fillStyle="purple";
    pincel.beginPath();
    pincel.moveTo(x1,y1);
    pincel.lineTo(x2,y2);
    pincel.lineTo(x3,y3);
    pincel.lineTo(x4,y4);
    pincel.fill();
}

function mayus(e) {
    e.value = e.value.toUpperCase();
}

var buttoncerrar= document.querySelector('#button-cerrar');
buttoncerrar.addEventListener('click',function(){
    setTecladoVirtual(true);
    habilitarTeclado=true;
    var ventanaAgregar=document.querySelector(".layout-agregar-palabra");
    ventanaAgregar.style.display="none";
    setNullNewWord();
    var newPalabra=document.querySelector("#input-agregar-palabra");
    newPalabra.value="";
});

