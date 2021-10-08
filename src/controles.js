// mover derecha
// mover izquierda
// saltar
// enter

var Tecla = {
    Derecha: false,
    Izquierda: false,
    Salto: false
}

//movimiento del personaje
function procesarControles() {
    if (Tecla.Derecha) {
        moverJugadorDerecha();
    } else if (Tecla.Izquierda) {
        moverJugadorIzquierda();
    }
}

// cuando se aprieta una tecla
document.addEventListener("keydown", function (evento) {
    // Chequea que tecla se aprieta y se guarda
    switch (evento.code) {
        case "KeyA":
            Tecla.Izquierda = true;
            break;
        case "KeyW":
            Tecla.Salto = true;
            break;
        case "KeyD":
            Tecla.Derecha = true;
            break;
    }
});

document.addEventListener("keyup", function (evento) {
    switch (evento.code) {
        case "KeyA":
            Tecla.Izquierda = false;
            break;
        case "KeyW":
            Tecla.Salto = false;
            break;
        case "KeyD":
            Tecla.Derecha = false;
            break;
    }
});

//apretamos una tecla
/*document.addEventListener("keydown", function (e) {
    console.log("tecla apretada", e.code);
});*/

//soltamos una tecla
/*document.addEventListener("keyup", function (e) {
    console.log("tecla soltada", e.code);    
});*/