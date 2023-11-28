/* 1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, 
en ese momento se crea un número aleatorio que el usuario deberá adivinar, 
la interfaz del usuario debe tener además un input para ingresar un número 
y un botón enviar, al presionar el botón enviar mostrar en un alert si el 
usuario adivino o no el número mágico, si no lo adivino indicarle con un alert 
si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario 
que adivino el numero.
 */

let numeroMagico;

function numeroRamdom() {
    return Math.floor(Math.random() * 100) + 1;
}

const botonEmpezar = document.getElementById("empezar");
const juego = document.getElementById("juego");
const inputNumero = document.getElementById("numero");
const botonEnviar = document.getElementById("enviar");

botonEmpezar.addEventListener("click", function() {
    numeroMagico = numeroRamdom();
    botonEmpezar.classList.add("d-none");
    juego.classList.remove("d-none");
});

botonEnviar.addEventListener("click", function() {
    const numero = parseInt(inputNumero.value);
    if (isNaN(numero) || numero < 1 || numero > 100) {
        alert("Por favor, ingresa un numero del 1 al 100");
    } else {
        if (numero === numeroMagico) {
            alert("¡Felicidades! Adivinaste el numero mágico");
            location.reload();
        } else if (numero < numeroMagico) {
            alert("El numero que ingresaste es menor al numero magico");
        } else {
            alert("El numero que ingresaste es mayor al numero magico");
        }
    }
});