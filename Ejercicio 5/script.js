const formulario = $("formulario");
const opciones = $("opcion");
const mensaje = $("mensaje");
const variableC = $("variableC")
const labelC = $("labelC")
const labelA = $("labelA")
const labelB = $("labelB")


variableC.style.display = "none";

    formulario.addEventListener("submit",(e) => {
        if (variableC === ""){
            const base = (formulario["variableA"].value);
            const altura = parseFloat(formulario["variableB"].value)
            const area = base*2 + altura*2
            alert(area)
        }  else{
            const base1 = (formulario["variableA"].value);
            const altura = parseFloat(formulario["variableB"].value)
            const base2 = (formulario["variableC"].value)
            const area1 = ((base1+base2)*altura)/2
            alert(area1)
        }

        
        e.preventDefault();
        })
    
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
            mensaje.textContent = "Base negativa, ingrese un positivo"; 
        }  else if(formulario["variableC"].value === "") {
            mensaje.textContent = "Base vacia, ingrese la base"; 
        }  else {
            mensaje.textContent = "Todos los datos son correctos!!";
            mensaje.style.color = "green";
            }
        })

    formulario.addEventListener('change', function() {
    
        const selectOpcion = opciones.value;
        if (selectOpcion == "calTrapecio") {
            labelC.textContent = "Base menor";
            labelB.textContent = "Base mayor";
            labelA.textContent = "Altura perpendicular";
            variableC.style.display = 'inline-block';
            variableC.required = true;

        } else if (selectOpcion =="calNormal") {
            variableC.style.display = 'none';
            labelC.textContent = "";
            labelB.textContent = "Ingrese base";
            labelA.textContent = "Ingrese altura";
        }
    });

    formulario.addEventListener("submit", function(e){
        e.preventDefault();
    })

    function $(elemento) {
        return document.getElementById(elemento);
    };
