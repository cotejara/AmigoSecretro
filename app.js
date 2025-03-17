// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {

    var nombre = document.getElementById("amigo").value;
console.log("nombre:" + nombre);

    if ( nombre.trim() === "") {
        alert("Debe ingresar un nombre!")
    } else {
        amigos.push(nombre); 
        console.log("amigos:" + amigos);
        actualizarLista(); // Llamamos a la función para actualizar el <ul>
        document.getElementById("amigo").value = "";

    };

}


function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach(function(amigo) {
        let li = document.createElement("li"); // Crear un elemento <li>
        li.textContent = amigo; // Asignar el nombre al <li>
        lista.appendChild(li); // Agregar el <li> al <ul>
    });
}

function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert("No hay amigos en la lista.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];

    let lista = document.getElementById("resultado");
    lista.innerHTML = ""; // Borra el contenido anterior
    
    let item = document.createElement("li");
    item.textContent = amigoSeleccionado;
    lista.appendChild(item);
}