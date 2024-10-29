window.onload = function() {
    const audio = document.getElementById('backgroundMusic');
    audio.volume = 0.3; // Ajusta el volumen entre 0.0 (silencio) y 1.0 (máximo)
    
    audio.play().catch(error => {
        console.log("Error al intentar reproducir música: ", error);
    });
};

const phrases = [
    "Te quiero como se quiere a ciertas cosas oscuras, secretamente, entre la sombra y el alma. Te quiero como se quiere el fuego, como se quiere el agua en la tierra, como se quiere el aire que respiramos. Te quiero en silencio, te quiero con la fuerza de un abrazo que no se ve, pero que se siente.",
    "La verdadera amistad es un refugio en el que encontramos consuelo, risas y la certeza de que siempre habrá alguien para apoyarnos. Cuando sientas que el mundo se vuelve oscuro, recuerda que estoy aquí, dispuesto a caminar a tu lado, a compartir tus sueños y tus miedos, porque en cada paso juntos, nuestra amistad se fortalece.",
    "No dudes ni un segundo de ti, ya caminaste sobre el fuego y sigues aquí. Dijeron que eras un caso perdido pero muy pocos sobreviven a lo que tú has resisitido. No dudes ni un segundo de ti, eres tan increible que nada ha podido contigo, después de tantos antidepresivos te mereces lo más bonito, porque a pesar de todo lo que viviste, tu vida no deja de ser hermosa.",
    "Los pasos de una persona son guiados por lo alto, y aunque tropiece, siempre encontrará apoyo. Por eso, no perdemos la fe; aunque el cuerpo se desgasta, el espíritu se renueva cada día. Las dificultades que enfrentamos ahora son temporales, y nos preparan para algo mucho más grande. Así que, amigos, yo no digo que ya lo he logrado, pero me concentro en lo que tengo por delante y sigo avanzando hacia mis metas.",
    "La amistad no se mide en momentos compartidos, sino en cómo cada uno de esos momentos se siente. Estoy aquí para ti en cada paso del camino, porque eres una parte fundamental de mi vida. Nunca olvides que, pase lo que pase, siempre contarás conmigo."
];

let currentIndex = 0;

function showNextPhrase() {
    const carouselText = document.getElementById("carousel-text");
    carouselText.textContent = phrases[currentIndex];
    
    // Resalta la frase
    carouselText.classList.add("highlight");
    
    // Cambia la frase y la animación de resalto
    setTimeout(() => {
        carouselText.classList.remove("highlight");
    }, 2000); // Resalta durante 2 segundos
    
    currentIndex = (currentIndex + 1) % phrases.length; // Mueve al siguiente índice
}

setInterval(showNextPhrase, 6000); // Cambia cada 6 segundos
showNextPhrase(); // Muestra la primera frase inmediatamente

