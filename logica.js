const openModal = document.querySelector('.Primer');
const modal = document.querySelector('.Nombre');
const closeModal = document.querySelector('.final');
const prueba = document.querySelector('.Tercero');
const puntuacionLink = document.querySelector('.Segundo');
const puntuacionDiv = document.getElementById('puntuacion-menu');
const cerrarPuntuacion = document.getElementById('cerrar-puntuacion');
const highscoreMenu = document.getElementById('highscore-menu');

// Obtener el puntaje más alto del localStorage
const highscore = localStorage.getItem('highscore') || 0;
highscoreMenu.textContent = highscore;

openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('Nombre-show');
});

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    prueba.classList.add('Tercero-show');
    modal.classList.remove('Nombre-show');
});

puntuacionLink.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar que el enlace navegue
    puntuacionDiv.style.display = 'block'; // Mostrar el div de puntuación
});

cerrarPuntuacion.addEventListener('click', () => {
    puntuacionDiv.style.display = 'none'; // Ocultar el div de puntuación
});