const listado = $("listado");
const mostrarUsarios = $("usuarios");

    mostrarUsarios.addEventListener("click", async () => {


        const cantidadElementos = listado.getElementsByTagName("li").length;

        if (cantidadElementos == 0){

        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const res2 =  await fetch("https://jsonplaceholder.typicode.com/todos")
        const tareas = await res2.json();
        if (res.ok) {
        console.log("llegaron los datos!");

        const personas = await res.json();
        personas.forEach((persona) => {
            const item = document.createElement("li");
            item.textContent = `Id: ${persona.id} - Nombre: ${persona.name} - Nombre de usuario: ${persona.username} - Email: ${persona.email} - Sitio web: ${persona.website}`;
            listado.appendChild(item);


            const boton = document.createElement("button")
            boton.textContent = "Ver tareas"
            item.appendChild (boton)

            const boton2 = document.createElement("button")
            boton2.textContent = "Cerrar"
            item.appendChild (boton2)
                
            
                
                boton.addEventListener("click",() => {
                    tareas.forEach((tarea)=>{
                        if (persona.id == tarea.userId){
                            const item2 = document.createElement("li");
                            item2.id = `list+${tarea.title}`
                            item2.textContent = `--- ${tarea.title}`;
                            item.appendChild(item2) 
                            if (tarea.completed){
                                item2.style.color = "green"
                            }else{
                                item2.style.color = "red"
                            }
                                

                        }
                            

                    })
                    boton2.addEventListener("click",() => {
                        tareas.forEach((tarea)=>{
                            const listTareas = $(`list+${tarea.title}`)
                            if (persona.id == tarea.userId){
                                item.removeChild(listTareas)
    
                        }
                            
            })
        })
    })

                

        });
        
        } else {
        console.error("Error: no llegaron los datos");
        }

        } else {

        }
    
        
    });



    function $(elemento) {
    return document.getElementById(elemento);
    }