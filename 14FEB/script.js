function animateCard(card) {
    // Añadimos una clase temporal para animación al hacer clic
    card.classList.add('clicked');
    
    // Después de un pequeño delay, eliminamos la clase para restaurar el estado original
    setTimeout(function() {
        card.classList.remove('clicked');
    }, 200); // El tiempo en milisegundos que dura la animación de clic
}
