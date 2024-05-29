const formulario = $("formulario");
    const mensaje = $("mensaje")
    const boton = $("boton")


    formulario.addEventListener("submit",(e) => {
        const peso = (formulario["peso"].value);
        const altura = parseFloat(formulario["altura"].value)
        const imc = peso/altura**2
        alert(imc)
        e.preventDefault();
    });

    formulario.addEventListener("focusout",() => {
        mensaje.style.color = "red"
        if (formulario["peso"].value === "") {
            mensaje.textContent = "Peso vacio - Ingrese su peso..";   
        }  else if (formulario["peso"].value <= 0) {
            mensaje.textContent = "Su peso no puede ser negativo o cero.";
        }  else if (formulario["altura"].value === "") {
            mensaje.textContent = "Altura vacia - Ingrese su altura..";
        }  else if(formulario["altura"].value <= 0) {
            mensaje.textContent = "Su altura no puede ser negativo o cero.";
        }   else {
            mensaje.textContent = "Todos los datos son correctos!!";
            mensaje.style.color = "green";
        }
    });

    function $(elemento) {
        return document.getElementById(elemento);
    };