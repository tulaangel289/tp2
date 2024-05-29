const formulario = $("formulario")
const mensaje = $("mensaje");;
const opcion = $("opcion");
const variableA = $("variableA")
const variableB = $("variableB")
const variableC = $("variableC");
const labelC = $("labelC")
const labelA = $("labelA")
const labelB = $("labelB")

variableC.style.display = "none";



opcion.onchange = () => {
    
    if (opcion.value === "calTrapecio"){
        variableC.style.display = "inline-block";
        variableC.required = true;
        labelC.textContent = "Base menor"
        labelA.textContent = "Altura perpendicular"
        labelB.textContent = "Base mayor"
        formulario.addEventListener("focusout",function(){
        
            mensaje.style.color = "red"
                    
        
            if (formulario["variableA"].value === "") {
        
                mensaje.textContent = "Altura vacia, ingrese la altura";   
            }  else if (formulario["variableA"].value < 0) {
                mensaje.textContent = "Altura negativa, ingrese un positivo";
            }  else if (formulario["variableB"].value === "") {
                mensaje.textContent = "Base vacia, ingrese la base";
            }  else if(formulario["variableB"].value < 0) {
                mensaje.textContent = "Base negativa, ingrese un positivo"; 
            }  else if(formulario["variableC"].value < 0) {
                mensaje.textContent = "Base negativa, ingrese un positivo"
            }  else if (formulario["variableC"].value === "") {
                mensaje.textContent = "Base vacia, ingrese la base";
                
                
            } else {
                mensaje.textContent = "Todos los datos son correctos!!";
                mensaje.style.color = "green";
                }})


    } else if   (opcion.value === "calNormal") {
        variableC.style.display = "none";
        labelC.textContent = ""
        labelA.textContent = "Altura"
        labelB.textContent = "Base"
        formulario.addEventListener("focusout",function(){
        
            mensaje.style.color = "red"
                    
        
            if (formulario["variableA"].value === "") {
        
                mensaje.textContent = "Altura vacia, ingrese la altura";   
            }  else if (formulario["variableA"].value < 0) {
                mensaje.textContent = "Altura negativa, ingrese un positivo";
            }  else if (formulario["variableB"].value === "") {
                mensaje.textContent = "Base vacia, ingrese la base";
            }  else if(formulario["variableB"].value < 0) {
                mensaje.textContent = "Base negativa, ingrese un positivo"; 
            }  
                
                else {
                mensaje.textContent = "Todos los datos son correctos!!";
                mensaje.style.color = "green";
                }})


    
    }};

    formulario.addEventListener("submit", function(e){
        if (opcion.value === "calNormal") {
            const altura = (formulario["variableA"].value)
            const base = (formulario["variableB"].value)
            const area = altura*2 + base*2
            console.log(typeof altura)
            console.log(typeof base)
            alert (area)
        }
        else if (opcion.value === "calTrapecio"){
            const altura = parseFloat(formulario["variableA"].value);
            const baseM = parseFloat(formulario["variableB"].value);
            const basem = parseFloat(formulario["variableC"].value);

            var area1 = (basem+baseM)*altura / 2
            alert (area1);
        
        }
        e.preventDefault();
    })

    function $(elemento) {
        return document.getElementById(elemento);
    };

    function clearInput(idElemento){
        const elemento = document.getElementById(idElemento);
        elemento.value = "";
    }