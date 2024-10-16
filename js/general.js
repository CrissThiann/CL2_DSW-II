document.addEventListener('DOMContentLoaded', function() {
    // Selección de elementos
    const btnRegistrarse = document.getElementById('btnRegistrarse');
    const btnIniciarSesion = document.getElementById('btnIniciarSesion');
    const modalLogin = document.querySelector('.glass-container');
    const modalRegister = document.querySelector('.glass-container-create');

    // Asegurarse de que el formulario de Crear Cuenta esté oculto inicialmente
    modalRegister.style.display = 'none';

    // Evento para mostrar el formulario de Crear Cuenta
    btnRegistrarse.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        modalLogin.style.display = 'none';  // Ocultar el formulario de Login
        modalRegister.style.display = 'block';  // Mostrar el formulario de Crear Cuenta
    });

    // Evento para volver al formulario de Login
    btnIniciarSesion.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        modalRegister.style.display = 'none';  // Ocultar el formulario de Crear Cuenta
        modalLogin.style.display = 'block';  // Mostrar el formulario de Login
    });
});