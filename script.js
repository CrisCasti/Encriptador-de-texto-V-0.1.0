
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var input = document.querySelector("#input-texto");
var resultado = document.querySelector("#msg");

var botonEncriptar = document.querySelector("#btn-encriptar");
botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
})

var botonDesencriptar = document.querySelector("#btn-desencriptar");
botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();
})

var botonCopiar = document.querySelector("#btn-copy");
botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
})

var textoValido=true;
input.focus();

function verificarTexto(texto){
    if (texto.length==0){
        alert("Por favor, introduzca el mensaje");
        textoValido=false;
    } 
    else{    
        for(var i=0;i<texto.length;i++){
            var textoAscii= texto.charCodeAt(i);
            if(textoAscii<97 || (textoAscii>122 && textoAscii<241) || textoAscii>241){
                if(textoAscii!=32){
                    alert("Por favor no incluya en el mensaje mayúsculas, caracteres especiales ni números");
                    textoValido=false;
                }
            }
        }


    }
    return textoValido;
}

//funcion encargada de encriptar el mensaje
function encriptarTexto(){
var vocales=[/e/g,/i/g,/a/g,/o/g,/u/g];
var vocalesEncriptadas=["enter","imes","ai","ober","ufat"];
var texto=input.value;
verificarTexto(texto);
    if (textoValido=true){ 
        for (var i=0; i < vocales.length ; i++ ) {
        var textoencriptado = texto.replace(vocales[i], vocalesEncriptadas[i]);
        texto=textoencriptado;
        }
    resultado.value=texto;
    } 
    else {
        resultado.value="";
    }
}
//funcion encargada de desencriptar el texto
function desencriptarTexto(){
var vocalesEncriptadas=[/enter/g,/imes/g,/ai/g,/ober/g,/ufat/g];
var vocales=["e","i","a","o","u"];
var texto=input.value;
verificarTexto(texto);
    if (textoValido=true){ 
        for (var i=0; i < vocales.length ; i++ ) {
        var textodesencriptado = texto.replace(vocalesEncriptadas[i], vocales[i]);
        texto=textodesencriptado;
        }
    resultado.value=texto;
    }
    else {
        resultado.value="";
        }
    }

function copiar() {
        var copyText = document.querySelector("#msg");
        copyText.select();
        document.execCommand("copy");
      }
      
botonEncriptar.onclick=encriptarTexto;

botonDesencriptar.onclick=desencriptarTexto;

botonCopiar.onclick=copiar;