var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;

var sprite = new Image()
sprite.src = "recursos/Main Characters/Ninja Frog/Idle (32x32).png"

// escala del muñequito
var ANCHO_
var PROPORCION_SPRITE = 2;

var cuadroActual = 0;

function borrarPantalla() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}

function dibujarSprite() {
    var anchoSprite = 32;
    var altoSprite = 32;

    var cuadros = sprite.width / anchoSprite;

    ctx.save();
    // parametros: eje x, eje y
    ctx.scale(jugador.direccion, 1);

    // si el jugador mira hacia la izquierda
    if (jugador.direccion === -1) {
        ctx.translate(-anchoSprite * PROPORCION_SPRITE, 0)
    }

    ctx.drawImage(
        sprite,
        cuadroActual * anchoSprite, // posicion x de la img
        0, // posicion y de la img
        anchoSprite, // ancho de la imagen
        altoSprite, // alto de la imagen
        jugador.direccion * jugador.x, // posicion x del canvas
        0, // posicion y del canvas
        anchoSprite * PROPORCION_SPRITE, // ancho del canvas
        altoSprite * PROPORCION_SPRITE // alto de canvas
    );

    ctx.restore();

    cuadroActual++;

    // Resetea animación
    if (cuadroActual >= cuadros) {
        cuadroActual = 0;
    }
}

// Bucle principal del Juego
function ejecutarBucle() {
    // Bucle que se ejecuta muchas veces por segundo

    borrarPantalla();
    dibujarSprite();
    procesarControles();

    window.requestAnimationFrame(ejecutarBucle);
}

// Requerir cuadro de animacion
window.requestAnimationFrame(ejecutarBucle);

