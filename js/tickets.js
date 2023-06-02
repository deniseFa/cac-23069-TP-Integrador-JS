//==========================================================================
//===========[CALCULADORA]============

    // Valores del formulario
    const cantidadInput = document.getElementById("cantidad");
    const categoriaSelect = document.getElementById("categoria");
    const totalElement = document.getElementById("total");

    // DEscuentos 
    const estudianteDescuento = parseFloat(document.getElementById("desc-80").textContent);
    const traineeDescuento = parseFloat(document.getElementById("desc-50").textContent);
    const juniorDescuento = parseFloat(document.getElementById("desc-30").textContent);

    // Disparador click del boton resumen
    document.getElementById("resumen").addEventListener("click", mostrarResumen);

    // cantidad de personas
    function obtenerCantidad() {
        const cantidad = parseFloat(cantidadInput.value);
        return cantidad;
    }

    // revisar que no sea 0 la cantidad
    function validarCantidad(cantidad) {
        if (isNaN(cantidad) || cantidad <= 0) {
            return false;
        }
        return true;
    }


    // Traer el precio del formulario 
    function obtenerPrecioBase() {
        const precioBase = parseFloat(document.getElementById("valor-entrada").textContent);
        return precioBase;
    }



    //Calcular los descuentos
    function obtenerDescuento(categoria) {
        let descuento = 0;

        if (categoria === "Estudiante") {
            descuento = estudianteDescuento / 100;
        } else if (categoria === "Trainee") {
            descuento = traineeDescuento / 100;
        } else if (categoria === "Junior") {
            descuento = juniorDescuento / 100;
        }

        return descuento;
    }

    // Cantidad corespondiente 
    function calcularTotal(cantidad, precioBase, descuento) {
        return cantidad * precioBase * (1 - descuento);
    }



    // Mostrar totales
    function mostrarResumen() {
        const cantidad = obtenerCantidad();

        if (!validarCantidad(cantidad)) {
            alert("Debe especificar la cantidad de personas que asistirán.");
            return;
        }

        const precioBase = obtenerPrecioBase();
        const categoria = categoriaSelect.value;
        const descuento = obtenerDescuento(categoria);
        const total = calcularTotal(cantidad, precioBase, descuento);

        totalElement.textContent = total.toFixed(0);
    }

//===========[FIN DE CALCULADORA]============
//==========================================================================

//==========================================================================
//===========[BORRADOR]============


    document.getElementById("borrar").addEventListener("click", borrarFormulario);

    //Campos por borrar
    function borrarCamposEntrada() {
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("email").value = "";
        document.getElementById("cantidad").value = "";
    }

    // Reiniciar la categoria
    function reiniciarCategoria() {
        const categoriaSelect = document.getElementById("categoria");
        categoriaSelect.selectedIndex = 0;
    }

    // Borrar el total
    function borrarTotal() {
        document.getElementById("total").textContent = "0";
    }

    // Aplicar todas las funciones 
    function borrarFormulario() {
        borrarCamposEntrada();
        reiniciarCategoria();
        borrarTotal();
    }




//===========[FIN DE BORRADOR]============
//==========================================================================


//==========================================================================
//===========[CAMBIAR LOS COLORES]============


    // Cambiar los estilos de las cajitas
    function cambiarEstiloCaja() {
        const categoria = document.getElementById("categoria").value;

        const estudianteCaja = document.getElementById("estudiante-caja");
        const traineeCaja = document.getElementById("trainee-caja");
        const juniorCaja = document.getElementById("junior-caja");

        restablecerEstilosCajas([estudianteCaja, traineeCaja, juniorCaja]);

        if (categoria === "Estudiante") {
            aplicarEstilosCaja(estudianteCaja, "bg-primary", "text-white");
        } else if (categoria === "Trainee") {
            aplicarEstilosCaja(traineeCaja, "bg-success", "text-white");
        } else if (categoria === "Junior") {
            aplicarEstilosCaja(juniorCaja, "bg-warning", "text-white");
        }
    }

    //Establecer los colores de las cajas 

    function restablecerEstilosCajas(cajas) {
        cajas.forEach((caja) => {
            caja.classList.remove("bg-primary", "bg-success", "bg-warning", "text-white");
        });
    }

    // Aplicar el estilo a las cajitas
    function aplicarEstilosCaja(caja, colorFondo, colorTexto) {
        caja.classList.add(colorFondo, colorTexto);
    }


    // Select de la categoria
    document.getElementById("categoria").addEventListener("change", cambiarEstiloCaja);
