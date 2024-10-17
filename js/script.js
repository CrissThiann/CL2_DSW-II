document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const btnRegistrarse = document.getElementById('btnRegistrarse');
    const btnIniciarSesion = document.getElementById('btnIniciarSesion');
    const btnInicioSesion = document.getElementById('btnInicioSesion');
    const modalLogin = document.getElementById('modalRegister');
    const modalRegister = document.getElementById('modalCreate');
    const mainContent = document.querySelector('.main-content');

    modalRegister.style.display = 'none';

      // Evento para mostrar el formulario de Crear Cuenta
    btnRegistrarse.addEventListener('click', function(event) {
        event.preventDefault();
        modalLogin.style.display = 'none'; 
        modalRegister.style.display = 'block'; 
    });

    // Evento para volver al formulario de Login
    btnIniciarSesion.addEventListener('click', function(event) {
        event.preventDefault(); 
        modalRegister.style.display = 'none';   
        modalLogin.style.display = 'block';  
    });

    //Evento para mostrar el modal de Login y hacer el fondo transparente
    btnInicioSesion.addEventListener('click', function(event){
        event.preventDefault(); 
        modalLogin.style.display = 'none';
        modalRegister.style.display = 'block'; 
        document.body.classList.add('transparent-background') 
    });
});

