/*Palabras del ahorcado*/
var palabras = ["OLIVO", "AHORCADO", "MURCIELAGO", "PORTATIL", "ARRAY", "BELLO", "MARIA", "NIEVE", "DRAGON", "TRONO"];
/*Array de botones para usasr más tarde*/
var desac = document.getElementsByClassName("let");
/*Contadores para usar más tarde*/
var contador = 0;
var contaexiste = 0;
/*Función de carga*/

/*Funciones para desactivar los enlaces*/
function desactiva_enlace(enlace) {
    enlace.disabled = 'disabled';
}
function desactiva_todo() {
    /*Uso un for para desactivar todos los botones*/
    for(b = 0; b < desac.length; b++){
        desac[b].disabled = 'disabled';
    }
}
/*Funciones de manejo del ahorcado */
function selecciona(){
    var seleccion = parseInt(Math.random() * (10));
    palabraJuego = new Array();
    palabraJuego = palabras[seleccion];
    /*Solo debug, muestra la palabra seleccionada del array de palabras*/
    //document.getElementById("debug").innerHTML = "<p>" + seleccion + "</p>"+"<p>" + palabraJuego + "</p>";
    pintarCaja();
}
function pintarCaja(){
    var divletra = "";
    for(a = 0; a < palabraJuego.length; a++){
        divletra += "<div class='letra' id='" + a + "'></div>";
        document.getElementById("palabra").innerHTML = divletra;
    }
}
function comprobarLetra(letra){
    var existeLetra = false;
    for(i = 0; i < palabraJuego.length; i++) {
        if(palabraJuego[i] == letra.toUpperCase()) {
        document.getElementById(i).innerText = letra.toUpperCase();
        contaexiste++;
        existeLetra = true;
        if(contaexiste == palabraJuego.length) {
            alert("Has ganado");
            desactiva_todo();
        }
        /*alert("Existe: "+ letra);*/
    }
}
if (existeLetra == false) {
    /*alert("ERROR " + letra);*/
    contador++;
    var canvas = document.getElementById('ahorcado');
    var ctx = canvas.getContext('2d');
    switch (contador) {
        /*Aqui va el dibujo*/
        /*Base*/
        case 1:
            ctx.strokeStyle = "#00f21";
            ctx.moveTo(20, 560);
            ctx.lineTo(200, 560);
            ctx.stroke();
            break;
            /*Mastil*/
        case 2:
            ctx.moveTo(100, 560);
            ctx.lineTo(100, 30);
            ctx.stroke();
            break;
            /*Travesaño*/
        case 3:
            ctx.moveTo(350, 30);
            ctx.lineTo(100, 30);
            ctx.stroke();
            break;
            /*Cuerda*/
        case 4:
            ctx.moveTo(350, 70);
            ctx.lineTo(350, 30);
            ctx.stroke();
            break;
            /*Cuerpo*/
        case 6:
            ctx.moveTo(350, 130);
            ctx.lineTo(350, 300);
            ctx.stroke();
            break;
        case 7:
            /*Izquierda*/
            ctx.moveTo(300, 200);
            ctx.lineTo(350, 150);
            ctx.moveTo(300, 350);
            ctx.lineTo(350, 300);
            ctx.stroke();
            break;
                
        case 8:
            /*Derecha*/
            ctx.moveTo(400, 200);
            ctx.lineTo(350, 150);
            ctx.moveTo(400, 350);
            ctx.lineTo(350, 300);
            ctx.stroke();
            alert("Has perdido");
            desactiva_todo();
            alert("La palabra correcta era: " + palabraJuego);
            break;
            /*Cabeza*/
        case 5:
            ctx.beginPath();
            ctx.arc(350, 100, 31.4, 0, Math.PI * 2, false);
            ctx.stroke();
            break;
        }
    }
}
/*Funciones Jquery*/
function fondoDegradado() {
    $('.fondoJQuery.oculto').css('background', degradadoAleat());
    $('.fondoJQuery').toggleClass('oculto');
}
function degradadoAleat() {
    var Inicio = {
        r: Math.floor(Math.random() * 255), g: Math.floor(Math.random() * 255), b: Math.floor(Math.random() * 255),
    };
    var Fin = {
        r: Math.floor(Math.random() * 255), g: Math.floor(Math.random() * 255), b: Math.floor(Math.random() * 255),
    };
    Inicio.rgb = 'rgb('+ Inicio.r + ','+ Inicio.g + ','+ Inicio.b + ')';
    Fin.rgb = 'rgb('+ Fin.r + ','+ Fin.g + ','+ Fin.b + ')';
    return 'radial-gradient(at center, ' + Inicio.rgb + ',' + Fin.rgb +')';
}