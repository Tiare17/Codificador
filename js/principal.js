var inputIngresado = document.querySelector("#texto-ingresado");
var codificar = document.querySelector("#cod");
var decodificar = document.querySelector("#decod");
var textoACopiar = document.querySelector("#texto-copiar");
var copiar = document.querySelector("#copiar");
var vocales = ["e","i","a","o","u"];
var cambioVocales = ["enter","imes","ai","ober","ufat"];
inputIngresado.focus();
var textoCodificado=0;
var textoDecodificado=0;

function codificador(){
    texto = inputIngresado.value;
    
    for (posicion=0;posicion<=vocales.length;posicion++){
        
        if (texto.includes(vocales[posicion])){
            texto=texto.replaceAll(vocales[posicion],cambioVocales[posicion]);
        }
    }
    textoCodificado=texto;
    
    document.getElementById("texto-copiar").value = textoCodificado;
    inputIngresado.value="";
    
    
}

codificar.onclick = codificador;

function copia(){
    textoACopiar.select();
    document.execCommand("copy");
    textoACopiar.value="";
}

copiar.onclick=copia;
inputIngresado.focus();
function decodificador(){
    for (posicion=0;posicion<=cambioVocales.length;posicion++){
        
        if (textoCodificado.includes(cambioVocales[posicion])){
            textoCodificado=textoCodificado.replaceAll(cambioVocales[posicion],vocales[posicion]);
            
        }
    }
    textoDecodificado=textoCodificado;
    
    document.getElementById("texto-copiar").value = textoDecodificado;
    inputIngresado.value="";
    
}

decodificar.onclick = decodificador;




