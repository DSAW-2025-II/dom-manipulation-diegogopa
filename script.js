// Tomamos los elementos
const inputTask = document.getElementById("tarea");
const btn = document.getElementById("agregar");
const list = document.getElementById("listado");
const count = document.getElementById("cantidad");

// Variable que lleva la cantidad de tareas
let total = 0;

btn.onclick = function() {
    // Controlamos si el campo está vacío
    if (inputTask.value === "") {
        return;
    }
    // Tomamos el valor del campo
    const element = inputTask.value;
    // Creo un elemento li
    const li = document.createElement("li");
    // Le agrego el texto al elemento
    li.textContent = element;
    // Agrego el li al listado
    list.appendChild(li);
    // Incremento la cantidad de tareas
    total++;
    count.innerHTML = total;

    // Agregamos el botón eliminar a cada elemento del listado
    const btnDelete = document.createElement("span");
    btnDelete.textContent = "\u00d7";
    li.appendChild(btnDelete);

    // Agregamos la funcionalidad que elimina del listado el elemento
    btnDelete.onclick = function() {
        li.remove();
        total--;
        count.innerHTML = total;
    }

    // Limpiamos el campo
    inputTask.value = "";
}