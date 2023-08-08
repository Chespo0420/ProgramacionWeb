document.addEventListener('DOMContentLoaded', function () {
    const tableBody = document.getElementById('table-body');

    // Cargar formularios previos del LocalStorage
    let formularios = JSON.parse(localStorage.getItem('formularios')) || [];

    function cargarFormulariosEnTabla() {
        tableBody.innerHTML = ''; // Limpiar la tabla antes de cargar los formularios

        // Recorrer los formularios y agregarlos a la tabla
        formularios.forEach((formulario, index) => {
            const row = tableBody.insertRow();
            row.innerHTML = `
                <td>${formulario.nombre}</td>
                <td>${formulario.email}</td>
                <td>${formulario.edad}</td>
                <td>${formulario.genero}</td>
                <td>${formulario.mensaje}</td>
                <td>
                    <button class="editar-btn" data-index="${index}">Editar</button>
                    <button class="eliminar-btn" data-index="${index}">Eliminar</button>
                </td>
            `;
        });
    }

    cargarFormulariosEnTabla(); // Cargar formularios al cargar la página

    // Función para mostrar el modal con los datos del formulario seleccionado
    function mostrarFormularioModal(index) {
        const formulario = formularios[index];
        const modal = document.getElementById('modal');
        const modalForm = document.getElementById('modal-form');

        modalForm.elements.nombre.value = formulario.nombre;
        modalForm.elements.email.value = formulario.email;
        modalForm.elements.edad.value = formulario.edad;
        modalForm.elements.genero.value = formulario.genero;
        modalForm.elements.mensaje.value = formulario.mensaje;

        modal.style.display = 'block';

        modalForm.addEventListener('submit', function (event) {
            event.preventDefault();

            formulario.nombre = modalForm.elements.nombre.value;
            formulario.email = modalForm.elements.email.value;
            formulario.edad = modalForm.elements.edad.value;
            formulario.genero = modalForm.elements.genero.value;
            formulario.mensaje = modalForm.elements.mensaje.value;

            localStorage.setItem('formularios', JSON.stringify(formularios));

            modal.style.display = 'none';

            cargarFormulariosEnTabla();
        });
    }

    // Event listeners para los botones "Editar" y "Eliminar"
    tableBody.addEventListener('click', function (event) {
        const target = event.target;
        if (target.classList.contains('editar-btn')) {
            const index = target.getAttribute('data-index');
            mostrarFormularioModal(index);
        } else if (target.classList.contains('eliminar-btn')) {
            const index = target.getAttribute('data-index');
            formularios.splice(index, 1);
            localStorage.setItem('formularios', JSON.stringify(formularios));
            cargarFormulariosEnTabla();
        }
    });
});
