let carrusel = document.getElementById("carrusel");
let nosotros = document.getElementById("nosotros");

let visible = false;

let mostrar = (event) =>{
    if (!visible) {
        
        carrusel.style.display = "block";
        visible = true;
        event.preventDefault();
        } else {
            
        carrusel.style.display = "none";
        visible = false;
        event.preventDefault();
        }
    };

nosotros.addEventListener("click", mostrar)
