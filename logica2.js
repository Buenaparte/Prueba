const Comenzar = document.querySelector('.Comenzar');
const Reiniciar = document.querySelector('.Reiniciar');
const rojo = document.querySelector('.cols2');
const verde = document.querySelector('.cols');
const amarillo = document.querySelector('.cols4');
const azul = document.querySelector('.cols3');
const p = document.querySelector('.Fin');
const reiniciarJuego = document.querySelector('.Quinto');
const menuPrincipal = document.querySelector('.Cuarto');
const gameStatus = document.querySelector('.game-status'); // "Juego en curso"
const labelScore = document.querySelector('.score');
const labelHighscoreFinal = document.querySelector('.highscore-final');
let ronda = 0;
let secuencia = [];
let jugadorSecuencia = [];
let confirmacion = true;
let puntaje = 0;
let highscore = localStorage.getItem('highscore') || 0;

function iniciar() {
    if (!confirmacion) return;

    ronda = 1; // Comenzar desde la ronda 1
    secuencia = [];
    jugadorSecuencia = [];

    for (let i = 0; i < ronda; i++) {
        const brillar = Math.floor(Math.random() * 4);
        secuencia.push(brillar);
    }

    mostrarSecuencia();
    gameStatus.style.display = 'block'; // Mostrar "Juego en curso"
}

function mostrarSecuencia() {
    let i = 0;
    const intervalo = setInterval(() => {
        const color = secuencia[i];
        iluminarColor(color);
        i++;
        if (i >= secuencia.length) {
            clearInterval(intervalo);
        }
    }, 500);
}

function iluminarColor(color) {
    let elemento;
    switch (color) {
        case 0: elemento = rojo; break;
        case 1: elemento = verde; break;
        case 2: elemento = amarillo; break;
        case 3: elemento = azul; break;
    }

    elemento.classList.add('brillar');
    setTimeout(() => {
        elemento.classList.remove('brillar');
    }, 300);
}

function verificar() {
    if (jugadorSecuencia.length === secuencia.length) {
        if (jugadorSecuencia.every((val, index) => val === secuencia[index])) {
            puntaje += 10;
            labelScore.textContent = puntaje;
            iniciar();
        } else {
            gameOver();
        }
    }
}

function gameOver() {
    confirmacion = false;
    p.classList.add('Fin-show');
    gameStatus.style.display = 'none'; // Ocultar "Juego en curso"

    labelHighscoreFinal.textContent = highscore;

    if (puntaje > highscore) {
        highscore = puntaje;
        localStorage.setItem('highscore', highscore);
    }
}

Reiniciar.addEventListener('click', () => {
    confirmacion = true;
    p.classList.remove('Fin-show');
    ronda = 0;
    puntaje = 0;
    labelScore.textContent = puntaje;
    iniciar();
});

Comenzar.addEventListener('click', () => {
    confirmacion = true;
    p.classList.remove('Fin-show');
    ronda = 0;
    puntaje = 0;
    labelScore.textContent = puntaje;
    iniciar();
});

rojo.addEventListener('click', () => manejarClick(0));
verde.addEventListener('click', () => manejarClick(1));
amarillo.addEventListener('click', () => manejarClick(2));
azul.addEventListener('click', () => manejarClick(3));

function manejarClick(color) {
    if (!confirmacion) return;

    jugadorSecuencia.push(color);
    iluminarColor(color);

    verificar();
}

reiniciarJuego.addEventListener('click', () => {
    confirmacion = true;
    p.classList.remove('Fin-show');
    ronda = 0;
    puntaje = 0;
    labelScore.textContent = puntaje;
    iniciar();
});

menuPrincipal.addEventListener('click', () => {
    localStorage.setItem('puntaje', puntaje);
    window.location.href = "Index.html";
});