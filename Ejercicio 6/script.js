const formulario = $("formulario")
const mensaje = $("mensaje");
const nombre = $("nombre");
const apellido = $("apellido");
const edad = $("edad");
const altura = $("altura");
const email = $("email");


formulario.addEventListener("submit",function(e){
    e.preventDefault();

    var resultado = true
    
    if (nombre.value === "") {
        var resultado = false
    }

    if ( nombre.value.length > 50) {
        var resultado = false
    }
    
    if (apellido.value === "" ){
        var resultado = false
    }

    if (apellido.value.length > 50){
        var resultado = false
    }

    if (edad.value < 0 || edad.value < 18){
        var resultado = false
    }

    if (altura.value < 0 || altura.value > 230){
        var resultado = false
    }

    if (email.value === "" ){
        var resultado = false
    }
        
    if (resultado){
        mensaje.style.color = "green"
        mensaje.textContent ="Todos los campos son correctos!"
    } else{
        mensaje.style.color = "red"
        mensaje.textContent = "Algunos campos son incorrectos."
    }

        
    

})
        

    

        function $(elemento) {
            return document.getElementById(elemento);
        };


