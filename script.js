// ======================================
// BOTÓN MOSTRAR / OCULTAR INFORMACIÓN
// TAQUERÍA EL SALVAJE
// ======================================

function mostrarInfo(id, boton) {

    // Buscamos la información mediante su ID
    const informacion = document.getElementById(id);

    // Comprobamos si la información está oculta
    if (informacion.style.display === "none") {

        // Mostramos la información
        informacion.style.display = "block";

        // Cambiamos el texto del botón
        boton.textContent = "Ocultar información";

    } else {

        // Ocultamos la información
        informacion.style.display = "none";

        // Regresamos el texto original
        boton.textContent = "Ver más información";

    }


function mostrarInfo(id, boton) {

    const informacion = document.getElementById(id);

    if (informacion.style.display === "none") {

        informacion.style.display = "block";

        boton.textContent = "Ocultar información";

    } else {

        informacion.style.display = "none";

        boton.textContent = "Ver más información";

    }

}

}