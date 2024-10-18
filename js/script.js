document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const btnRegistrarse = document.getElementById('btnRegistrarse');
    const btnIniciarSesion = document.getElementById('btnIniciarSesion');
    const btnInicioSesion = document.getElementById('btnInicioSesion');
    const modalLogin = document.getElementById('modalRegister');
    const modalRegister = document.getElementById('modalCreate');
    const tituloPost = document.getElementById('tituloPost');
    const modalPost = document.getElementById('modalPost');

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
        if (modalLogin.style.display === 'block') {
            modalLogin.style.display = 'none';
            document.body.classList.remove('transparent-background');
            tituloPost.style.display = 'block';
            //
        } else {
            modalLogin.style.display = 'block';
            modalRegister.style.display = 'none'; 
            tituloPost.style.display = 'none';
            document.body.classList.add('transparent-background');
        }
    });

    // Evento para mostrar el modal de Post y centrarlo en la pantalla
    btnModalPost.addEventListener('click', function(event) {
        event.preventDefault();
        if (modalPost.style.display === 'block') {
            modalPost.style.display = 'none';
            document.body.classList.remove('transparent-background');
            tituloPost.style.display = 'block';
        } else {
            modalPost.style.display = 'block';
            modalPost.style.position = 'fixed';
            modalPost.style.top = '50%';
            modalPost.style.left = '50%';
            modalPost.style.transform = 'translate(-50%, -50%)';
            tituloPost.style.display = 'none';
            document.body.classList.add('transparent-background');
        }
    });

});

