$(document).ready(function () {
    
    $("#boton").click( () => { 
    alert("Estimado (a): " + $("#nombre").val() + ", agradecemos por reservar con nosotros. Hemos registrado " + $("#asistentes").val() + " asistentes. Se ha enviado el código de confirmación al correo: " + $("#email").val() + "\n\nGracias por preferirnos.")
        
    });
});

