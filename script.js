document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos todos los botones del menú y todas las pantallas
    const menuButtons = document.querySelectorAll('.menu-btn');
    const screens = document.querySelectorAll('.screen');

    // Recorremos cada botón para añadirle el evento de clic
    menuButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            
            // 1. Ocultar todas las pantallas y quitar la clase active de todos los botones
            screens.forEach(screen => screen.classList.remove('active'));
            menuButtons.forEach(btn => btn.classList.remove('active'));

            // 2. Añadir la clase active al botón que acabamos de hacer clic
            e.currentTarget.classList.add('active');

            // 3. Obtener el ID de la pantalla desde el atributo data-target y mostrarla
            const targetScreenId = button.getAttribute('data-target');
            document.getElementById(targetScreenId).classList.add('active');
        });
    });
});