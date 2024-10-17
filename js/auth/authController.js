$(() => {
    const objAuth = new Autenticacion();

    //moda create account
    $("#btnRegistroEmail").click(() => {
        const nombres = $("nombreCreate").val();
        const email = $("#emailCreate").val();
        const password = $("#passwordCreate").val();

        const auth = Autenticacion();

        // Llamar crear cuenta con email
        auth.crearCuentaEmailPass(email, password, nombres);
    });

    //modal login
    $("#btnInicio").click(() => {
        const email = $("emailSession").val();
        const password = $("passwordSession").val();

        //Llamar auth cuenta con email
        const auth = Autenticacion();

        auth.authEmailPass(email,password);
    });

    $("#btnRegistrarse").click(() => {
        $("#modalRegister").modal("close");
        $("modalCreate").modal("open");
    });

    $("#btnIniciarSesion").click(() => {
        $("#modalCreate").modal("close");
        $("#modalRegister").modal("open");
    });



})