function button() {
    // Obtener referencia al botón y al menú
    const toggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const navbarMenu = document.getElementById('navbar-default');

    // Agregar evento de clic al botón
    toggleButton.addEventListener('click', function() {
        // Alternar clase para mostrar u ocultar el menú
        navbarMenu.classList.toggle('hidden');
    });
}

function data() {
    fetch("http://localhost:3001/datos")
        .then(response => response.json())

        .then(datos => {
            const table = document.getElementById("coffeeListTableBody");

            datos.forEach(cafe => {
                //Creamos la fila
                const tr = document.createElement("tr");
                tr.classList.add("border-b", "border-gray-200")

                for(let campo in cafe) {
                    //Creamos cada columna
                    const td = document.createElement("td");
                    td.classList.add("py-3", "px-6", "text-left", "whitespace-nowrap");
                    td.textContent = cafe[campo];

                    //Agregamos la n-esima columna a la fila
                    tr.appendChild(td);
                }

                //Agregamos la n-esima fila a la tabla
                table.appendChild(tr);
            });
        })

        .catch(error => console.error('Error al cargar el archivo JSON:', error));
}