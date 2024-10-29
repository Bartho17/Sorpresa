const message = document.getElementById('message');
const text = "Para ti, porque te lo mereces";
message.textContent = '';

// Efecto de resaltar letra por letra en el h1
text.split('').forEach((letter, index) => {
    const span = document.createElement('span');
    span.textContent = letter === ' ' ? '\u00A0' : letter; // Para espacios
    span.classList.add('highlight');
    message.appendChild(span);

    setTimeout(() => {
        span.style.opacity = 1;
    }, index * 100); // Cambia 300 por el tiempo en milisegundos que desees
});

// Mostrar el mensaje de la carta después de que termine el efecto del h1
setTimeout(() => {
    const cardMessage = document.getElementById('card-message');
    cardMessage.textContent = "Quiero que sepas que estoy muy orgulloso de ti, tal vez muchas personas no lo noten, pero yo si valoro lo que haces dia a dia, desde el momento que te levantas hasta antes de irte a dormir, nunca dudes de ti porque eres una persona absolutamente maravillosa.";
    
    // Mostrar el botón después de que todo termine
    const surpriseButton = document.querySelector('.surpriseButton');
    surpriseButton.classList.remove('hidden'); // Eliminar la clase que oculta el botón
    surpriseButton.style.opacity = 0; // Ocultar inicialmente el botón
    surpriseButton.style.display = 'inline-block'; // Asegurarse de que el botón esté en línea
    setTimeout(() => {
        surpriseButton.style.opacity = 1; // Mostrar el botón
    }, 500); // Cambia el tiempo si lo deseas
}, text.length * 100 + 200); // Tiempo total del efecto + tiempo adicional para mostrar el mensaje de la carta


